import { getServerSession } from 'next-auth';
import { Col, Container, Row } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import { adminProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import { Contact } from '@/lib/validationSchemas';
import ContactCardAdmin from '@/components/ContactCardAdmin';

const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  adminProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );
  const contacts : Contact[] = await prisma.contact.findMany({});
  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Container>
          <center>
            <h1>Contacts</h1>
          </center>
          <Row className="mt-5">
            <Col>
              <Row xs={1} md={2} lg={3} className="g-4">
                {contacts.map((item) => (
                  <Col key={`Contact-${item.firstName}`}>
                    <ContactCardAdmin contact={item} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </main>
  );
};

export default AdminPage;

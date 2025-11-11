import { getServerSession } from 'next-auth';
import { Col, Container, Row } from 'react-bootstrap';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import ContactCard from '@/components/ContactCard';
import { prisma } from '@/lib/prisma';
import { Contact, Note } from '@prisma/client';

const ListPage = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  const owner = session?.user!.email ? session.user.email : '';
  const contacts : Contact[] = await prisma.contact.findMany({
    where: {
      owner,
    },
  });
  const notes : Note[] = await prisma.note.findMany({
    where: {
      owner,
    },
  });
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
                {contacts.map((contact) => (
                  <Col key={`Contact-${contact.firstName}`}>
                    <ContactCard
                      contact={contact}
                      notes={notes.filter(note => (note.contactId === contact.id))}
                    />
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

export default ListPage;

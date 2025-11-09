'use client';

import { Contact, Note } from '@prisma/client';
import { Card, ListGroup } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import NoteItem from '@/components/NoteItem';
import AddNoteForm from '@/components/AddNoteForm';
import Link from 'next/link';

/* Renders a single row in the List Contact table. See list/page.tsx. */
const ContactCardAdmin = ({ contact, notes }: { contact : Contact; notes : Note[] }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={contact.image} width={75} />
      <Card.Title>
        {contact.firstName}
        &nbsp;
        {contact.lastName}
      </Card.Title>
      <Card.Subtitle>
        {contact.address}
      </Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>
        {contact.description}
      </Card.Text>
      <ListGroup variant="flush">
        {notes.map((note) => <NoteItem key={note.id} note={note} />)}
      </ListGroup>
      <AddNoteForm contact={contact} />
      <p className="blockquote-footer">{contact.owner}</p>
    </Card.Body>
    <Card.Footer>
      <Link href={`edit/${contact.id}`}>Edit</Link>
    </Card.Footer>
  </Card>
);

export default ContactCardAdmin;

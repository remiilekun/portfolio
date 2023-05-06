import { Form, OutlineButton } from 'components/atoms';

const ContactForm = () => {
  return (
    <Form action="https://formspree.io/remilekun.salami@gmail.com" method="POST">
      <Form.Group>
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Input id="name" required placeholder="Enter your name" name="name" />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="email">Email Address</Form.Label>
        <Form.Input id="email" required type="email" placeholder="Enter your email address" name="email" />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="message">Your Message</Form.Label>
        <Form.Textarea
          id="message"
          name="message"
          placeholder="I want to build the next great thing"
          required
          rows="5"
        />
      </Form.Group>

      <Form.Group sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <OutlineButton fontSize="normal" size="large">
          Talk to me
        </OutlineButton>
      </Form.Group>
    </Form>
  );
};

export default ContactForm;

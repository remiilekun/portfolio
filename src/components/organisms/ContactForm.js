import { Form, OutlineButton } from 'components/atoms';

const ContactForm = () => {
  return (
    <Form action="https://formspree.io/remilekun.salami@gmail.com" method="POST">
      <Form.Group>
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Input required placeholder="Enter your name" name="name" />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="email">Email Address</Form.Label>
        <Form.Input required type="email" placeholder="Enter your email address" name="email" />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="message">Your Message</Form.Label>
        <Form.Textarea required placeholder="I want to build the next great thing" rows="5" name="message" />
      </Form.Group>

      <Form.Group alignItems="center" justiyContent="center">
        <OutlineButton fontSize="normal" size="large">
          Talk to me
        </OutlineButton>
      </Form.Group>
    </Form>
  );
};

export default ContactForm;

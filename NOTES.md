## Loose ends
### Firebase auth
- Login saying "Firebase: Error (auth/missing-email)" but new users are logged in when they create their accounts
- Input section of form giving a warning "Warning: A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components
    at input"
- user.email is returning null on Checkout and Header components

### Components
- The home route '/' is not acting as the default as it should. If you use a random route e.g '/random' browser shows a blank page instead of the home component by default
- Remove the comment on console, "This is the basket"
- Fix items alignment on the Payment component, they are supposed to take .8 of the screen on the right side
- Clean up component image and ratings placement
- Implement animations react-flip-move (Github: joshwcomeau/react-flip-move)
- Add content to the Checkout Amazon card banner
- Add a footer to all the pages

### Console Warnings
- "Warning: Each child in a list should have a unique "key" prop. Check the render method of `Product`."
- Warning: validateDOMNesting(...): `<h4>` cannot appear as a child of `<h3>`

### Stripe
- After setting up Stripe and making a payment using card credentials 42424242424242 etc, the payment status under [https://dashboard.stripe.com/test/payments/](https://dashboard.stripe.com/test/payments/), payment status still says incomplete. [Docs for fixing the issue](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method)

### Firebase
- Order details will not be sent properly to Firestore if user is not logged in. But currently, users can only sign in when they sign in - regular sign in is not working fully yet.
## Loose ends
### Firebase auth
- Login saying "Firebase: Error (auth/missing-email)"
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

### Other
- "Warning: Each child in a list should have a unique "key" prop. Check the render method of `Product`."
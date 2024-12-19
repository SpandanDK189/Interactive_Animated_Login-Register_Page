# Form Flip Animation with Floating Labels

This project demonstrates an elegant and interactive form design featuring a **flip animation** and **floating label text**. The form allows users to toggle between the **login** and **register** sections, creating a smooth and modern user experience. The project is built using HTML, CSS, and JavaScript.

## Features

- **Floating Labels**: Labels for input fields float above the fields when the user interacts with them. This effect is achieved with CSS transitions and JavaScript.
- **Flip Animation**: The form card flips to reveal either the login or registration form, offering a sleek transition between the two states.
- **Responsive Design**: The form is designed to be responsive and looks great on both desktops and mobile devices.
- **Interactive Elements**: The card flips when the user clicks on the links to switch between the login and registration forms.

## Project Structure

- `index.html`: The HTML structure that contains the login and registration forms.
- `style.css`: The CSS styles for the form, including the floating label effect, flip animation, and button hover styles.
- `script.js`: The JavaScript functionality that handles the flip animation and dynamic label transitions.

## Floating Label Effect

The floating label effect is achieved by using the following CSS properties:

- `position: absolute;` for the label to initially position it inside the input field.
- `transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);` to create smooth animations for the label.
- `transform: translateY(-30px);` to move the label above the input when the input is focused or valid.
- `:valid` and `:focus` selectors are used to trigger the animation when the user interacts with the input fields.

```css
.form-control input:focus + label span,
.form-control input:valid + label span {
  color: #4ECCA3;
  transform: translateY(-30px);
}
```

### JavaScript Interaction

The JavaScript file (`script.js`) handles the user interaction between the **login** and **register** forms. When the user clicks on the respective links, the card flips to show the corresponding form.

```javascript
registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  card.classList.add('flipped');
});

loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  card.classList.remove('flipped');
});
```

### Flip Animation

The flip effect is accomplished using **CSS 3D transforms**. When the user clicks on the "Register" or "Login" link, the `.flipped` class is added or removed from the card, causing it to rotate on the Y-axis.

```css
.card {
  transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.card.flipped {
  transform: rotateY(180deg) translateZ(50px);
}
```

## How to Use

1. Clone the repository or download the project files.
2. Open the `index.html` file in your browser to view the form in action.
3. Customize the form, labels, or animations to suit your needs.

```bash
git clone https://github.com/SpandanDK189/Interactive_Animated_Login-Register_Page.git
cd form-flip-animation
open index.html
```

## Credits

- **Fonts**: The project uses the [Muli](https://fonts.google.com/specimen/Muli) font from Google Fonts.
- **Design Inspiration**: The design is inspired by modern UI trends and aims to provide a clean, minimal user experience.

## License

This project is open source and available under the [MIT License](LICENSE).

# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### Screenshot

![](./component.gif)

### Links

- Live Site URL: [Add live site URL here](https://qr-code-component-mocha-omega.vercel.app/)

### Built with

- Next.js
- Chakra-ui
- [Next.js](https://nextjs.org/) - Javascript framework
- [Chakra-ui](https://chakra-ui.com/) - Component library

### What I learned

I learnt how the next.js image optimizations work using the `sizes` prop. Depending on screen width, you can see here that I am telling next.js to provide a different sized image each time. This means that smaller versions of the images are served to smaller screens, reducing the file size and loading time.

```javascript
<Image
  alt='qr code'
  height='576'
  width='576'
  sizes='(min-width: 60em) 24vw,(min-width: 28em) 45vw,100vw'
  src={'/image-qr-code.png'}
  style={{
    borderRadius: '10px',
    objectFit: 'contain',
    height: 'auto',
  }}
/>
```

I also learned that Vercel really want you to use their platform for deploying to. (I had great issues trying to get next.js 13.4 to deploy to github)

# nextjs-storybook-zeit-bolilerplate
Boilerplate built following this <a href="https://dev.to/aprietof/next-js-typescript-storybook-the-really-simple-guide-2019-fei" target="_blank">guide</a>

### Project setup
* `yarn`: to install dependencies

### Project start

* `yarn dev`: start the next js dev server
* `yarn build`: generate a prodcution ready version of the next app (output in `.next` folder)

* `yarn storybook`: run the storybook dev server
* `yarn storybook:build`: generate a deployable version of storybook (output in `.out` folder)

### This project has support for
* Storybook
* sass and css modules in Next and Storybook
* Typescript in Next and Storybook

### Storybook
Storybook has the following addons:
* [Knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs)
* [Actions](https://github.com/storybookjs/storybook/tree/master/addons/actions)
* [Viewport](https://github.com/storybookjs/storybook/tree/master/addons/viewport)
* [a11y](https://github.com/storybookjs/storybook/tree/master/addons/a11y)

### Typescript
There is also the option of throwing errors in **DEV mode** when typescript checking fails. To disable this behaviour go to

* `.storybook/webpack.config.js`
* `next.config.js`

and comment this code:

```javascript
config.plugins.unshift(
    new ForkTsCheckerWebpackPlugin({
      async: false, // blocks Typescript compilation on typechecking error for DEV mode!
    })
);
```

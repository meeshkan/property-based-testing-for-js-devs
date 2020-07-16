# Property-Based Testing for JavaScript Developers

[![Chat on Gitter](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/meeshkan/community)

This repository contains the source code for our article: [Property-based testing for JavaScript developers](https://meeshkan.com/blog/property-based-testing-javascript/).

Most of the tests are written with [fast-check](https://dubzzz.github.io/fast-check/), a JavaScript library for generative test cases.

If you run into problems or have any questions, please [open an issue](https://github.com/meeshkan/property-based-testing-for-js-devs/issues/new) or [reach out to us on Gitter](https://gitter.im/meeshkan/community).

🐍 Prefer Python? This same guide is available to help you learn [property-based testing in Python](https://meeshkan.com/blog/property-based-testing-python/) instead.

## What's in this document

- [Running the tests](#running-the-tests)
- [Available libraries](#available-libraries)
  - [JavaScript](#javascript)
  - [Other languages](#other-languages)
- [Additional resources](#additional-resources)
- [Contributing](#contributing)
- [Tell us what you think](#tell-us-what-you-think)

## Running the tests

⚠️ **Prerequisites**:

- [NPM](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) installed

Clone this repository and move into the directory:

```bash
git clone https://github.com/meeshkan/property-based-testing-for-js-devs.git
cd property-based-testing-for-js-devs
```

Install the dependencies:

```bash
# npm
npm install

# yarn
yarn
```

> You can check out the [package.json](./package.json) to see what dependencies are used.

Finally, run the tests:

```bash
# npm
npm run test

# yarn
yarn test
```

> For this example, the test suite consists of [Jest](https://github.com/facebook/jest) and [fast-check](https://github.com/dubzzz/fast-check/).

## Available libraries

### JavaScript

- [fast-check](https://github.com/dubzzz/fast-check) (used in this guide)
- [JSVerify](https://github.com/jsverify/jsverify)
- [node-quickcheck](https://github.com/mcandre/node-quickcheck)

### Other languages

- [Hypothesis](https://hypothesis.readthedocs.io/en/latest/): Python (used in [our Python guide](https://dev.to/meeshkan/from-1-to-10-000-test-cases-in-under-an-hour-a-beginner-s-guide-to-property-based-testing-1jf8))
- [FsCheck](https://fscheck.github.io/FsCheck/): .NET
- [jqwik](https://jqwik.net/): Java
- [PropCheck](https://github.com/alfert/propcheck): Elixir
- [Proptest](https://github.com/AltSysrq/proptest): Rust
- [PropEr](https://proper-testing.github.io/): Erlang
- [RapidCheck](https://github.com/emil-e/rapidcheck): C++
- [QuickCheck](https://hackage.haskell.org/package/QuickCheck): Haskell
- [QuickCheck ported to Rust](https://docs.rs/quickcheck/0.9.2/quickcheck/): Rust
- [ScalaCheck](https://github.com/typelevel/scalacheck): Scala

## Additional resources

- 📖 [Introduction to Property Based Testing](https://medium.com/criteo-labs/introduction-to-property-based-testing-f5236229d237) by Nicolas Dubien (creator of fast-check)
- 🖥 [Property-based testing: From theory to practice](https://dubzzz.github.io/fast-check.github.com/talks/meetup-typescript-04092018/property-based-testing.html) by Nicolas Dubien (creator of fast-check)
- 📖 [From 1 to 10,000 test cases in under an hour - A beginner's guide to property-based testing](https://meeshkan.com/blog/property-based-testing-python/) by our colleagues Carolyn Stransky and Fredrik Fornwall
- 🖥 [Slides and demo from an introduction to property-based testing presentation](https://github.com/ksaaskil/introduction-to-property-based-testing) by our former colleague Kimmo Sääskilahti
- 📖 [Property-based testing with React and fast-check](https://dev.to/tobiastimm/property-based-testing-with-react-and-fast-check-3dce) by Tobias Timm
- 📖 [Introduction to property-based testing (with TypeScript)](https://dev.to/gcanti/introduction-to-property-based-testing-17nk) by Giulio Canti
- 📖 [Property-based testing: what is it?](https://blog.jessitron.com/2013/04/25/property-based-testing-what-is-it/) by Jessica Joy Kerr
- 🎥 [Testing the Hard Stuff and Staying Sane](https://www.youtube.com/watch?v=zi0rHwfiX1Q) by John Hughes

## Contributing

Notice a bug? Interested in adding a new section to our guide? Have any other property-based testing resources you think we should know? The best way to get involved is to [open an issue](https://github.com/meeshkan/property-based-testing-for-js-devs/issues).

Please note that this project is governed by the [Meeshkan Community Code of Conduct](https://github.com/meeshkan/code-of-conduct). By participating, you agree to abide by its terms.

## Tell us what you think

At [Meeshkan](https://meeshkan.com/), we're working to improve how people test their products. So no matter if you loved or loathed our guide, we want to hear from you.

Here are some ways you can get in touch:

- [Open an issue](https://github.com/meeshkan/property-based-testing-for-js-devs/issues)
- [Tweet at us](https://twitter.com/meeshkan)
- [Reach out on Gitter](https://gitter.im/Meeshkan/community)

Some future article ideas:

- Writing property-based tests with TypeScript
- Our favorite fast-check features for JavaScript testing
- Something else? Let us know!

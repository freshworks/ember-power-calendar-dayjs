ember-power-calendar-dayjs
==============================================================================

Date manipulation, formatting and parsing is too complex for ember-power-calendar to reinvent, so it
has to rely on other well tested libraries for that.

This is the addon that exposes the utils used internally by [ember-power-calendar](https://www.ember-power-calendar.com),
using [dayjs](https://github.com/iamkun/dayjs/) underneath, a lighter 2KB alternative to moment.js.

You will want to install this addon if you already use dayjs in your application already, or if
dayjs is your preferred date manipulation library.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-power-calendar-dayjs
```


Usage
------------------------------------------------------------------------------

**Don't use it.**

This library is meant to be used internally by `ember-power-calendar` only.

The API can change in breaking ways based on the needs of Ember Power Calendar.


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-power-calendar-dayjs`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

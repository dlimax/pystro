Smartlunch
========

[![Join the chat at https://gitter.im/du2x/smartlunch](https://badges.gitter.im/du2x/smartlunch.svg)](https://gitter.im/du2x/smartlunch?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Smartlunch is a **simple** and easy to use and to extend restaurant api and webapp, designed specially for small restaurants that serves **lunch** - there are (will be) two function that stands out in this context: Subscription and requesting for lunch plate preparation before arriving (for customers in a hurry).

It is written in Flask, following the principles SOLID, KISS, YAGNI, DRY and Flask specific best practices, taking @miguelgrinberg as one of the main references. We also follow pep8 style guide.

Running it
--------

Smartlunch runs with python3 (and *possibly* with python2)

create virtualenv.

`virtualenv -p python3 venv`


activate virtualenv

`source venv/bin/activate.sh`


export FLASK_APP (this is made automatically if you have `autoenv`)

`export FLASK_APP=smartlunch.py`


run it

`flask run`

Brief Api Description
----

The api has three main modules:
- Users management and authentication.
    - Models: User.
- Menu management.
    - Models: Item, Special.
- Orders management.
    - Models: Order.
- Subscription.
    - Models: Subscription, Payment, CreditCard.


Brief Web app description
-----
The webapp will be a **simple** website, with an administration panel and a front store page, which will consume the Smartlunch api to get the items and specials to show.

There will be also an android client which will consume the Smartlunch api, but these will be on other github repo.

We are open!
-----
**Smartlunch** will be always open source, licensed under GPL3.

Feel free to contribute!

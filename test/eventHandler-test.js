import test from 'ava';
import { JSDOM } from 'jsdom';
import { spy, stub } from 'sinon';
import { eventHandler } from '../js/eventHandler';

test('eventHandler', async t => {
  await JSDOM.fromFile('./index.html').then(({ window: { document } }) => {
    global.document = document;
    let event = {
      preventDefault: spy(),
      target: {
        closest: stub().returns({ value: '' })
      },
      which: 13
    };

    eventHandler(event);
    let p = document.querySelectorAll('p');
    t.true(event.target.closest.calledOnce);
    t.is(p[0].innerText, 'The text field is empty. Please enter your name.');
    t.true(p[0].classList.contains('text-danger'));
    t.true(event.preventDefault.calledOnce);

    event = {
      preventDefault: spy(),
      target: {
        closest: stub().returns({ value: 'Sam' })
      },
      which: 13
    };

    eventHandler(event);
    p = document.querySelectorAll('p');
    t.true(event.target.closest.calledOnce);
    t.is(p[1].innerText, 'Hello Sam, nice to meet you!');
    t.true(event.preventDefault.calledOnce);

    event = {
      target: {
        closest: spy()
      },
      which: 1
    };

    eventHandler(event);
    t.true(event.target.closest.calledOnce);
  });
});

'use strict'

import test from 'ava'
import { create, compare } from '.'

const fingerprint = 'announcement anomaly clothing consultancy cemetery carrier'

test('generates fingerprint from password', async t => {
  const fingerprint = await create('my-master-password')
	t.is(fingerprint, fingerprint)
})

test('compares fingerprint with password', async t => {
	t.true(await compare('my-master-password', fingerprint))
})

test('compares fingerprint with password', async t => {
	const error = await t.throws(compare('other-master-password', fingerprint), Error)
	t.is(error.message, 'Password does not match fingerprint')
})
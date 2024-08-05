describe("bug", () => {
    it('matches the only call with toHaveBeenCalledWith', () => {
        const obj = {httpRequest: {status: 1234, alsoDontCare: 123}, shouldIgnore: true, otherObj: {bla: "test"}}

        const spy = jest.fn();

        spy("test string", obj)

        expect(spy).toHaveBeenCalledWith("test string", expect.objectContaining({httpRequest: expect.objectContaining({status: 1234})}))
    })

    it('matches the first call with toHaveBeenCalledWith', () => {
        const obj = {httpRequest: {status: 1234, alsoDontCare: 123}, shouldIgnore: true, otherObj: {bla: "test"}}

        const spy = jest.fn();

        spy("test string", obj)
        spy("some other call", {err: {foo: 'bar'}})

        expect(spy).toHaveBeenCalledWith("test string", expect.objectContaining({httpRequest: expect.objectContaining({status: 1234})}))
    })

    it('matches the second call with toHaveBeenCalledWith', () => {
        const obj = {httpRequest: {status: 1234, alsoDontCare: 123}, shouldIgnore: true, otherObj: {bla: "test"}}

        const spy = jest.fn();

        spy("some other call", {err: {foo: 'bar'}})
        spy("test string", obj)

        expect(spy).toHaveBeenCalledWith("test string", expect.objectContaining({httpRequest: expect.objectContaining({status: 1234})}))
    })

    it('matches the second call with toHaveBeenNthCalledWith', () => {
        const obj = {httpRequest: {status: 1234, alsoDontCare: 123}, shouldIgnore: true, otherObj: {bla: "test"}}

        const spy = jest.fn();

        spy("some other call", {err: {foo: 'bar'}})
        spy("test string", obj)

        expect(spy).toHaveBeenNthCalledWith(2, "test string", expect.objectContaining({httpRequest: expect.objectContaining({status: 1234})}))
    })
})

describe('dashboard endpoints', () => {
    beforeEach(async (done) => {
        await resetTestDB()
        done()
    })

    it('should return a list of users in database', async (done) => {
        const res = await request(api).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(1);
        done();
    })
    
    it('should return')
    // it('should return a list of books by a specific author', async (done) => {
    //     const res = await request(api).get('/authors/1');
    //     expect(res.statusCode).toEqual(200);
    //     expect(res.body.books.length).toEqual(2);
    //     done();
    // }) 
})
describe('Reservation', ()=>{
    beforeAll(async ()=>{
        //create user
        const AUTH_BODY = {
            "email": "feldjesus@gmail.com",
            "password": "myStrongPassword@123"
          };
        await fetch('http://auth:3001/users', { method: 'POST', body: JSON.stringify(AUTH_BODY), headers: { 'Content-Type': 'application/json' } });
        const response = await fetch('http://auth:3001/auth/login', { method: 'POST', body: JSON.stringify(AUTH_BODY), headers: { 'Content-Type': 'application/json' } });
        const jwt = (await response.text());
        console.log(jwt);
        expect(true).toBeTruthy()
        
    });

    test('create', async ()=>{})

})

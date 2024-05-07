describe('Reservation', ()=>{
    let JWT = '';
    beforeAll(async ()=>{
        //create user
        const AUTH_BODY = {
            "email": "feldjesus@gmail.com",
            "password": "myStrongPassword@123"
          };
        await fetch('http://auth:3001/users', { method: 'POST', body: JSON.stringify(AUTH_BODY), headers: { 'Content-Type': 'application/json' } });
        const response = await fetch('http://auth:3001/auth/login', { method: 'POST', body: JSON.stringify(AUTH_BODY), headers: { 'Content-Type': 'application/json' } });
        JWT = (await response.text());
        
        expect(true).toBeTruthy()
        
    });

    test('create & Gey', async ()=>{
        const CREATE_BODY = {
            "startDate": "12-20-2024",
            "endDate": "12-25-2024",
            "placeId": "123",
            "invoiceId": "456",
            "charge": {
            "amount": 42,
            "card": {
                "cvc": "413",
                "exp_month": 12,
                "exp_year": 2027,
                "number": "4242 4242 4242 4242"
                }
            }
        };

        const response_create = await fetch('http://reservations:3000/reservations', { method: 'POST', body: JSON.stringify(CREATE_BODY), headers: { 'Content-Type': 'application/json', Authentication: JWT } });
        const reservation = await response_create.json();
        expect(response_create.ok).toBeTruthy();


        const response_get = await fetch(`http://reservations:3000/reservations/${reservation._id}`, { method: 'GET', headers: { 'Content-Type': 'application/json', Authentication: JWT } });
        const reservation_get = await response_get.json();
        expect(reservation).toEqual(reservation_get);

    })

})

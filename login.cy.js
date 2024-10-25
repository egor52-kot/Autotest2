describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановления пароля


         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нашел кнопку "Войти" и нажал на нее


         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
         
    })
     
    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановления пароля

        
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio52'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нашел кнопку "Войти" и нажал на нее


        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        
   })

   it('Проверка логики восстановления пароля', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановления пароля

    cy.get('#forgotEmailButton').click(); // Нажал кнопку забыли пароль
    cy.get('#mailForgot').type('egor15.12str@mail.ru') // Ввели имейл 
    cy.get('#restoreEmailButton').click(); // Нажал кнопку отправить код

    cy.get('#message').contains('Успешно отправили пароль на e-mail'); // Проверяю что после вижу текст 
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

    })
    it('Негативный кейс авторизации с ошибкой в имейл', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановления пароля
    
        cy.get('#mail').type('german1@dolnikov.ru') // Ввели  неверный имейл 
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти
     
    
        cy.get('#message').contains('Такого логина или пароля нет'); // Проверить нужный текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    
        })
        it('Негативный кейс авторизации без @', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановления пароля
        
            cy.get('#mail').type('germandolnikov.ru') // Ввели  неверный имейл 
            cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
            cy.get('#loginButton').click(); // Нажал войти
         
        
            cy.get('#message').contains('Нужно исправить проблему валидации'); // Проверить нужный текст
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        
            })
            it('Проверка на приведение к строчным буквам в логине:', function () {
                cy.visit('https://login.qa.studio/'); // Зашли на сайт
                cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановления пароля
            
                cy.get('#mail').type('GerMan@Dolnikov.ru') // Ввели  неверный имейл 
                cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
                cy.get('#loginButton').click(); // Нажал войти
             
            
                cy.get('#message').contains('Такого логина или пароля нет'); // Проверить нужный текст
                cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
                cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
            
                })
})








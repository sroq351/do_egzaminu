// Definiowanie tablicy produktów z użyciem const
const cart = [
    { name: 'Apple', price: 1.2 },
    { name: 'Banana', price: 0.8 },
    { name: 'Orange', price: 1.5 }
  ];
  
  // Funkcja do wyświetlania produktów w koszyku
  function displayCart() {
    const cartItems = document.getElementById('cartItems');
    
    // Usuwamy wszystkie elementy w liście przed ponownym wyświetleniem
    while (cartItems.firstChild) {
      cartItems.removeChild(cartItems.firstChild);
    }
  
    // Iterujemy po produktach i dodajemy je do DOM
    cart.forEach((item) => {
      const li = document.createElement('li');    // Tworzymy nowy element <li>
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;  // Ustawiamy tekst wewnątrz <li>
      cartItems.appendChild(li);  // Dodajemy element <li> do <ul> (koszyka)
    });
  }
  
  // Funkcja do dodawania nowego produktu
  function addItem() {
    // Dodajemy nowy produkt do tablicy
    cart.push({ name: 'Grapes', price: 2.0 });
    displayCart(); // Przerysowujemy koszyk
  }
  
  // Funkcja do modyfikowania ceny produktu
  function modifyItem() {
    // Zmieniamy cenę pierwszego produktu
    if (cart.length > 0) {
      cart[0].price = 1.5;
      displayCart(); // Przerysowujemy koszyk
    }
  }
  
  // Obsługa przycisków
  document.getElementById('addItem').addEventListener('click', addItem);
  document.getElementById('modifyItem').addEventListener('click', modifyItem);
  
  // Wyświetlanie początkowego koszyka
  displayCart();
  
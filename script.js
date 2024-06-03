document.getElementById('purchaseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;

    alert(`Thank you, ${name}! Your order for ${quantity} ${size}-size shirt(s) has been placed and will be shipped to ${address}.`);
});


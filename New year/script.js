function generateCard() {
    var name = document.getElementById('name').value;
    var cardContainer = document.getElementById('card-container');

    if (name.trim() === '') {
        alert('Please enter your name.');
    } else {
        var card = document.createElement('div');
        card.innerHTML = `
            <div class="card">
                <img src="https://www.sampleposts.com/wp-content/uploads/2020/05/happy-new-year.jpg" class="card-img-top" alt="New Year 2024">
                <div class="card-body">
                    <h5 class="card-title">Happy New Year, ${name}!</h5>
                    <p class="card-text">May this year bring you joy, happiness, and success. Wishing you a wonderful and prosperous 2024!</p>
                </div>
            </div>
        `;

        // Clear previous cards
        cardContainer.innerHTML = '';

        // Append the new card
        cardContainer.appendChild(card);
    }
}
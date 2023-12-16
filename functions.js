
$(document).ready(function () {
    const placeholders = [
        "Inteligência Artificial",
        "Machine Learning",
        "Desenvolvimento Web",
        "Segurança Cibernética",
        "Realidade Virtual",
        "IoT (Internet das Coisas)",
        "Programação em Python",
        "5G e Redes Sem Fio"      
    ];

    let currentIndex = 0;

    setInterval(function () {
        const searchInput = document.getElementById("searchInput");
        searchInput.placeholder = placeholders[currentIndex];

        currentIndex++;
        if (currentIndex >= placeholders.length) {
            currentIndex = 0;
        }
    }, 2000);
});


let body = document.querySelector('body'),
    header = document.querySelector('header > div'),
    ul = document.createElement('ul'),
    sections = document.querySelectorAll('section'),
    button = document.querySelector('button');

for (let i = 0; i < sections.length; i++) {
    // Navigation part
    let li = document.createElement('li');
    li.textContent = `section ${i+1}`;
    li.addEventListener('click', () => {window.scrollTo({top: sections[i].offsetTop, behavior: "smooth"})})
    ul.appendChild(li);
   
    // Section part
    let h2 = document.createElement('h2'),
        p = document.createElement('p'),
        lorem = document.createTextNode(`
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis totam voluptatum fuga, ad quae magni iste, qui ratione quia reiciendis blanditiis, ex repellendus ea delectus recusandae vitae architecto quo maiores
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis totam voluptatum fuga, ad quae magni iste, qui ratione quia reiciendis blanditiis, ex repellendus ea delectus recusandae vitae architecto quo maiores.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis totam voluptatum fuga, ad quae magni iste, qui ratione quia reiciendis blanditiis, ex repellendus ea delectus recusandae vitae architecto quo maiores.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis totam voluptatum fuga, ad quae magni iste, qui ratione quia reiciendis blanditiis, ex repellendus ea delectus recusandae vitae architecto quo maiores.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis totam voluptatum fuga, ad quae magni iste, qui ratione quia reiciendis blanditiis, ex repellendus ea delectus recusandae vitae architecto quo maiores.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis totam voluptatum fuga, ad quae magni iste, qui ratione quia reiciendis blanditiis, ex repellendus ea delectus recusandae vitae architecto quo maiores.
        `);

    h2.textContent = `section ${i+1}`;
    p.appendChild(lorem);
    sections[i].appendChild(h2);
    sections[i].appendChild(p);
}
// Navigation bar
header.appendChild(ul);

// Scroll To Top Button
button.addEventListener('click', () => window.scrollTo({top: 0, behavior: "smooth"}));

// Navigator
let lists = document.querySelectorAll('ul li');

// Window Scroll
window.addEventListener('scroll', () => {
    button.style.display = (window.innerHeight > sections[2].getBoundingClientRect().bottom ? 'block' : 'none');

    if (sections[0].getBoundingClientRect().y <= (window.innerHeight / 2)) {
        // Links
        if (lists[0].classList !== "active") {
            lists[0].classList.add("active");
            lists[1].classList.contains('active') ? lists[1].classList.remove('active') : null
            lists[2].classList.contains('active') ? lists[2].classList.remove('active') : null
            lists[3].classList.contains('active') ? lists[3].classList.remove('active') : null
        };
        // Sections
        if (sections[0].classList !== "active") {
            sections[0].classList.add("active");
            sections[1].classList.contains('active') ? sections[1].classList.remove('active') : null
            sections[2].classList.contains('active') ? sections[2].classList.remove('active') : null
            sections[3].classList.contains('active') ? sections[3].classList.remove('active') : null
        };
    };

    if (sections[1].getBoundingClientRect().y <= (window.innerHeight / 2)) {
        // Links
        if (lists[1].classList !== "active") {
            lists[1].classList.add("active");
            lists[0].classList.contains('active') ? lists[0].classList.remove('active') : null
            lists[2].classList.contains('active') ? lists[2].classList.remove('active') : null
            lists[3].classList.contains('active') ? lists[3].classList.remove('active') : null
        };
        // Sections
        if (sections[1].classList !== "active") {
            sections[1].classList.add("active");
            sections[0].classList.contains('active') ? sections[0].classList.remove('active') : null
            sections[2].classList.contains('active') ? sections[2].classList.remove('active') : null
            sections[3].classList.contains('active') ? sections[3].classList.remove('active') : null
        };
    };

    if (sections[2].getBoundingClientRect().y <= (window.innerHeight / 2)) {
        // Links
        if (lists[2].classList !== "active") {
            lists[2].classList.add("active");
            lists[0].classList.contains('active') ? lists[0].classList.remove('active') : null
            lists[1].classList.contains('active') ? lists[1].classList.remove('active') : null
            lists[3].classList.contains('active') ? lists[3].classList.remove('active') : null
        };
        // Sections
        if (sections[2].classList !== "active") {
            sections[2].classList.add("active");
            sections[0].classList.contains('active') ? sections[0].classList.remove('active') : null
            sections[1].classList.contains('active') ? sections[1].classList.remove('active') : null
            sections[3].classList.contains('active') ? sections[3].classList.remove('active') : null
        };
    };

    if (sections[3].getBoundingClientRect().y <= (window.innerHeight / 2)) {
        // Links
        if (lists[3].classList !== "active") {
            lists[3].classList.add("active");
            lists[0].classList.contains('active') ? lists[0].classList.remove('active') : null
            lists[1].classList.contains('active') ? lists[1].classList.remove('active') : null
            lists[2].classList.contains('active') ? lists[2].classList.remove('active') : null
        };
        // Sections
        if (sections[3].classList !== "active") {
            sections[3].classList.add("active");
            sections[0].classList.contains('active') ? sections[0].classList.remove('active') : null
            sections[1].classList.contains('active') ? sections[1].classList.remove('active') : null
            sections[2].classList.contains('active') ? sections[2].classList.remove('active') : null
        };
    };
})

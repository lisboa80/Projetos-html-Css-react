/* =======================================================
   ELEMENTOS
======================================================= */

const menuGrid =
    document.getElementById('menu-grid');

const filters =
    document.querySelectorAll('.filter');

const modal =
    document.getElementById('product-modal');

const modalClose =
    document.getElementById('modal-close');

const modalImage =
    document.getElementById('modal-image');

const modalName =
    document.getElementById('modal-name');

const modalPrice =
    document.getElementById('modal-price');


/* =======================================================
   FORMATA PREÇO
======================================================= */

function formatPrice(price) {

    return price
        .toFixed(2)
        .replace('.', ',');

}


/* =======================================================
   MOSTRAR PRODUTOS
======================================================= */

function showProducts(products) {

    menuGrid.innerHTML = '';

    products.forEach(product => {

        const card =
            document.createElement('article');

        card.className = 'card';


        card.innerHTML = `

            <div class="card-image">

                <img
                    src="${product.src}"
                    alt="${product.name}"
                    loading="lazy">

                ${product.vegan
                ?
                '<span class="card-badge vegan">Vegano</span>'
                :
                '<span class="card-badge">Bruto</span>'
            }

            </div>


            <div class="card-body">

                <h3>
                    ${product.name}
                </h3>


                <div class="card-bottom">

                    <div class="price">
                        R$ ${formatPrice(product.price)}
                    </div>

                    <button
                        class="order-button">

                        Ver detalhes

                    </button>

                </div>

            </div>

        `;


        const button =
            card.querySelector('.order-button');


        button.addEventListener(
            'click',
            () => {

                openModal(product);

            }
        );


        menuGrid.appendChild(card);

    });

}


/* =======================================================
   FILTROS
======================================================= */

filters.forEach(filter => {

    filter.addEventListener(
        'click',
        () => {

            filters.forEach(item => {

                item.classList.remove('active');

            });


            filter.classList.add('active');


            const selected =
                filter.dataset.filter;


            if (selected === 'all') {

                showProducts(menuOptions);

                return;

            }


            if (selected === 'vegan') {

                showProducts(
                    menuOptions.filter(
                        product => product.vegan
                    )
                );

                return;

            }


            if (selected === 'normal') {

                showProducts(
                    menuOptions.filter(
                        product => !product.vegan
                    )
                );

            }

        }
    );

});


/* =======================================================
   MODAL
======================================================= */

function openModal(product) {

    modalImage.src =
        product.src;

    modalImage.alt =
        product.name;

    modalName.textContent =
        product.name;

    modalPrice.textContent =
        `R$ ${formatPrice(product.price)}`;

    modal.classList.add('show');

    document.body.style.overflow =
        'hidden';

}


function closeModal() {

    modal.classList.remove('show');

    document.body.style.overflow =
        '';

}


modalClose.addEventListener(
    'click',
    closeModal
);


modal.addEventListener(
    'click',
    event => {

        if (event.target === modal) {

            closeModal();

        }

    }
);


document.addEventListener(
    'keydown',
    event => {

        if (event.key === 'Escape') {

            closeModal();

        }

    }
);


/* =======================================================
   INICIALIZAÇÃO
======================================================= */

showProducts(menuOptions);
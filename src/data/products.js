import ProductsPage from "../pages/ProductsPage";
import allNecklaces from "./necklaces/allNecklaces";
import allPendants from "./pendants/allPendants";
import allRings from "./rings/allRings";
import allEarrings from "./earrings/allEarrings";
import allBracelets from "./bracelets/allBracelets";
import standardBracelets from "./bracelets/standardBracelets";
import pearlBracelets from "./bracelets/pearlBracelets";
import stoneBracelets from "./bracelets/stoneBracelets";
import snakeChains from "./necklaces/snakeChains";
import boxChains from "./necklaces/boxChains";
import animalsPendants from "./pendants/animalsPendants";
import lovePendants from "./pendants/lovePendants";
import namePendants from "./pendants/namesPendants";
import miscPendants from "./pendants/miscPendants";
import standardRings from "./rings/standardRings";
import pearlRings from "./rings/pearlRings";
import stoneRings from "./rings/stoneRings";
import standardEarrings from "./earrings/standardEarrings";
import pearlEarrings from "./earrings/pearlEarrings";
import stoneEarrings from "./earrings/stoneEarrings";

const products = [
    {
        label: 'Necklaces',
        path: '/necklaces',
        id: 'N01',
        element: <ProductsPage array={allNecklaces} />,
        categories: [
            {
                label: 'Snake Chain',
                id: 'SC',
                path: '/snake-chains',
                element: <ProductsPage array={snakeChains} />
            },
            {
                label: 'Box Chain',
                id: 'BC',
                path: '/box-chains',
                element: <ProductsPage array={boxChains} />
            }
        ]
    },
    {
        label: 'Pendants',
        path: '/pendants',
        id: 'P01',
        element: <ProductsPage array={allPendants} />,
        categories: [
            {
                label: 'Animals',
                id: 'AP',
                path: '/animals-pendants',
                element: <ProductsPage array={animalsPendants} />
            },
            {
                label: 'Love',
                id: 'LP',
                path: '/love-pendants',
                element: <ProductsPage array={lovePendants} />
            },
            {
                label: 'Names',
                id: 'NP',
                path: '/names-pendants',
                element: <ProductsPage array={namePendants} />
            },
            {
                label: 'Misc',
                id: 'MP',
                path: '/misc-pendants',
                element: <ProductsPage array={miscPendants} />
            },
        ],
    },
    {
        label: 'Rings',
        id: 'R01',
        path: '/rings',
        element: <ProductsPage array={allRings} />,
        categories: [
            {
                label: 'Standard',
                id: 'SR',
                path: '/standard-rings',
                element: <ProductsPage array={standardRings} />
            },
            {
                label: 'Pearl',
                id: 'PR',
                path: '/pearl-rings',
                element: <ProductsPage array={pearlRings} />
            },
            {
                label: 'Stone',
                id: 'SR',
                path: '/stone-rings',
                element: <ProductsPage array={stoneRings} />
            }
        ],
    },
    {
        label: 'Earrings',
        id: 'E01',
        path: '/earrings',
        element: <ProductsPage array={allEarrings} />,
        categories: [
            {
                label: 'Standard',
                id: 'SE',
                path: '/standard-earrings',
                element: <ProductsPage array={standardEarrings} />
            },
            {
                label: 'Pearl',
                id: 'PE',
                path: '/pearl-earrings',
                element: <ProductsPage array={pearlEarrings} />
            },
            {
                label: 'Stone',
                id: 'SE',
                path: '/stone-earrings',
                element: <ProductsPage array={stoneEarrings} />
            }
        ],
    },
    {
        label: 'Bracelets',
        path: '/bracelets',
        id: 'B01',
        element: <ProductsPage array={allBracelets} />,
        categories: [
            {
                label: 'Standard',
                path: '/standard-bracelets',
                id: 'SB',
                element: <ProductsPage array={standardBracelets} />
            },
            {
                label: 'Pearl',
                id: 'PB',
                path: '/pearl-bracelets',
                element: <ProductsPage array={pearlBracelets} />
            },
            {
                label: 'Stone',
                id: 'STB',
                path: '/stone-bracelets',
                element: <ProductsPage array={stoneBracelets} />
            }
        ],
    }
];

export default products;
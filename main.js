
// using the code at : https://gist.github.com/eladcandroid/137f5e1ef922cdd72d3fc372f55e9dc9
// to build a react web app

const productsArr = [
    {
        productName:'Winter Jacket', 
        productType:'jacket', 
        productImgSrc:'https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369',
        productPrice:'$99.99'
    },
    {
        productName:'Winter Jacket', 
        productType:'jacket', 
        productImgSrc:'https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369',
        productPrice:'$99.99'
    },
    {
        productName:'Winter Jacket', 
        productType:'jacket', 
        productImgSrc:'https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369',
        productPrice:'$99.99'
    },
    {
        productName:'Winter Scarf', 
        productType:'scarf', 
        productImgSrc:'',
        productPrice:'$19.99'
    },
    {
        productName:'Winter Jacket', 
        productType:'jacket', 
        productImgSrc:'https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369',
        productPrice:'$99.99'
    },
    {
        productName:'Winter Jacket', 
        productType:'jacket', 
        productImgSrc:'https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369',
        productPrice:'$99.99'
    },
    {
        productName:'Winter Jacket', 
        productType:'jacket', 
        productImgSrc:'https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369',
        productPrice:'$99.99'
    }
]



const NavProductFilter = ({productName}) => {
    const jacketsFilterOptionsArr = ['All Jackets', '2016', 'jacket', 'Jackets', 'layers', 'Obermeyer', 'Roxy', 'womens'];
    const sortOptionsArr = ['Featured', 'Best selling', 'Alphabetically, A-Z', 'Alphabetically, Z-A', 
                            'Price, low to high', 'Price, high to low', 'Date, new to old', 'Date, old to new'];

    return (
        <nav className='product-filter'>
            <h1>{productName}</h1>
            <div className='sort'>
                <Filter filterName='Filter by:' optionsArr={jacketsFilterOptionsArr} />
                <Filter filterName='Sort by:' optionsArr={sortOptionsArr}/>
            </div>
        </nav>
    )
}

const Filter = ({filterName, optionsArr}) => {
    return (
        <div className='collection-sort'>
            <label>{filterName}</label>
            <select>
                {optionsArr.map((item, index) => <option key={index} value='/'>{item}</option>)}
            </select>
        </div>
    )
}

const Products = ({productType}) => {
    let filteredProductsArr = productsArr.filter((item) => item.productType === productType);

    return (
        <section className='products'>
            {filteredProductsArr.map((item, index) => <Product key={index} item={item} />)}
        </section>
    )
}

const Product = ({item}) => {
    const {productName, productImgSrc, productPrice} = item;
    return (
        <div className='product-card'>
            <div className='product-image'>
                <img src={productImgSrc} />
            </div>
            <div className='product-info'>
                <h5>{productName}</h5>
                <h6>{productPrice}</h6>
            </div>
        </div>
    )
}


const Main = () => {
    return (
        <div>
            <NavProductFilter productName={'Jackets'} />
            <Products productType='jacket' />
        </div>
    )
}

ReactDOM.render(<Main />, document.getElementById('app'));


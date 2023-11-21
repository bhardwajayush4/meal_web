import { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import CommonSection from '../UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import products from '../assets/fake-data/products'
import ProductCard from '../UI/Product-card/ProductCard'
import '../styles/Allfoods.css'
import ReactPaginate from 'react-paginate'
import '../styles/PaginationBttns.css'

const Allfoods = () => {
    const [searchterm, setSearchTerm] = useState("")
    const [pagenumber, setPageNumber] = useState(0)

    const searchedProduct = products.filter(item => {
        if (item.title.toLowerCase().includes(searchterm.toLowerCase())) {
            return item
        }
        if (searchterm.value === '') {
            return item
        }
    })

    const productPerPage = 8;
    const visistedPage = pagenumber * productPerPage
    const displayPage = searchedProduct.slice(visistedPage, visistedPage + productPerPage)

    const pageCount = Math.ceil(searchedProduct.length / productPerPage)

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <Helmet title='All-foods'>
            <CommonSection title='All-foods' />
            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='6' xs = '12'>
                            <div className='search__widget d-flex align-items-center justify-content-between'>
                                <input value={searchterm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder='I am looking.....' />
                                <span className='text-end'><i class="ri-search-line"></i></span>
                            </div>
                        </Col>
                        <Col lg='6' md='6' sm='6' xs = '12'>
                            <div className='sorting__widget text-end'>
                                <select >
                                    <option>By default</option>
                                    <option value="ascending">Alphabetically, A-Z</option>
                                    <option value="descending">Alphabetically, Z-A</option>
                                    <option value="high-price">High price</option>
                                    <option value="lower-price">Low price</option>
                                </select>
                            </div>
                        </Col>

                        {displayPage
                            .map(item => (
                                <Col lg='3' md='4' className='mt-4'>
                                    <ProductCard item={item} key={item.id} />
                                </Col>
                            ))}
                        <div>
                            <ReactPaginate
                                nextLabel="Next"
                                onPageChange={changePage}
                                containerClassName="PaginationBttns"
                                pageCount={pageCount}
                                previousLabel="Prev"
                            />
                        </div>

                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Allfoods
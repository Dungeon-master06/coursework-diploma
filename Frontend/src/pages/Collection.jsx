import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets.js'
import Title from '../components/Title.jsx'
import ProductItem from '../components/ProductItem.jsx'

const Collection = () => {
	const { products,search ,showSearch } = useContext(ShopContext)
	const [showFilter, setShowFilter] = useState(true)
	const [filterProducts, setFilterProducts] = useState([])
	const [category, setCategory] = useState([])
	const [subCategory, setSubCategory] = useState([])
	const [sortType, setSortType] = useState('relevant')

	const toggleCategory = e => {
		const value = e.target.value
		setCategory(prev =>
			prev.includes(value)
				? prev.filter(item => item !== value)
				: [...prev, value]
		)
	}

	const toggleSubCategory = e => {
		const value = e.target.value
		setSubCategory(prev =>
			prev.includes(value)
				? prev.filter(item => item !== value)
				: [...prev, value]
		)
	}

	const applyFilter = () => {
		let productsCopy = [...products]

		if(showSearch && search){
			productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
		}

		if (category.length > 0) {
			productsCopy = productsCopy.filter(item =>
				category.includes(item.category)
			)
		}
		if (subCategory.length > 0) {
			productsCopy = productsCopy.filter(item =>
				subCategory.includes(item.subCategory)
			)
		}
		setFilterProducts(productsCopy)
	}

	const sortProduct = () => {
		let sorted = [...filterProducts]
		switch (sortType) {
			case 'low-high':
				sorted.sort((a, b) => a.price - b.price)
				break
			case 'high-low':
				sorted.sort((a, b) => b.price - a.price)
				break
			default:
				applyFilter()
				return
		}
		setFilterProducts(sorted)
	}

	useEffect(() => {
		applyFilter()
	}, [category, subCategory,search,showSearch])

	useEffect(() => {
		sortProduct()
	}, [sortType])

	return (
		<div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
			{/* Filter Option */}
			<div className='min-w-60'>
				<p
					onClick={() => setShowFilter(!showFilter)}
					className='my-2 text-xl flex items-center cursor-pointer gap-2'
				>
					Filter
					<img
						src={assets.dropdown_icon}
						className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
					/>
				</p>
				{/* Category Filter */}
				<div
					className={`border border-gray-300 pl-5 py-3 mt-6 ${
						showFilter ? '' : 'hidden'
					} sm:block`}
				>
					<p className='mb-3 text-sm font-medium'>Categories</p>
					<div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
						{['Men', 'Women', 'Kids'].map(cat => (
							<p key={cat} className='flex gap-2'>
								<input
									className='w-3'
									type='checkbox'
									value={cat}
									onChange={toggleCategory}
								/>
								{cat}
							</p>
						))}
					</div>
				</div>
				{/* SubCategory Filter */}
				<div
					className={`border border-gray-300 pl-5 py-3 my-5 ${
						showFilter ? '' : 'hidden'
					} sm:block`}
				>
					<p className='mb-3 text-sm font-medium'>Type</p>
					<div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
						{['Topwear', 'Bottomwear', 'Winterwear'].map(subCat => (
							<p key={subCat} className='flex gap-2'>
								<input
									className='w-3'
									type='checkbox'
									value={subCat}
									onChange={toggleSubCategory}
								/>
								{subCat}
							</p>
						))}
					</div>
				</div>
			</div>
			{/* Right Side */}
			<div className='flex-1'>
				<div className='flex justify-between text-base sm:text-2xl mb-4'>
					<Title text1={'All'} text2={'Collections'} />
					{/* Product Sort */}
					<select
						onChange={e => setSortType(e.target.value)}
						className='border-2 border-white-300 text-sm px-2'
					>
						<option value='relevant'>Sort by: Relevant</option>
						<option value='low-high'>Sort by: Low to High</option>
						<option value='high-low'>Sort by: High to Low</option>
					</select>
				</div>
				{/* Map Products */}
				<div className='grid grid-cols-2 md:grid-cols-3 li:grid-cols-4 gap-4 gap-y-6'>
					{filterProducts.map((item, index) => (
						<ProductItem
							key={index}
							id={item._id}
							image={item.image}
							name={item.name}
							price={item.price}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Collection

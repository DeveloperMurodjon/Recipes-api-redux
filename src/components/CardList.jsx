import React, { useEffect } from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { setRecipes, setLoading, setError } from '../lib/recipeSlice';

function CardList() {
    const dispatch = useDispatch();
    const { recipes, status, error } = useSelector(state => state.recipes);

    useEffect(() => {
        const getRecipes = async () => {
            dispatch(setLoading());
            try {
                const res = await fetch("https://dummyjson.com/recipes");
                const data = await res.json();
                dispatch(setRecipes(data.recipes));
            } catch (err) {
                dispatch(setError(err.message));
            }
        };
        getRecipes();
    }, [dispatch]);

    if (status === 'loading') return <p className="text-center text-2xl py-10">Yuklanmoqda...</p>;
    if (status === 'failed') return <p className="text-center text-2xl py-10 text-red-600">Xatolik: {error}</p>;

    return (
        <div className='items-center flex flex-col'>
            <h1 className='text-4xl py-10'>Recipes</h1>
            <div className='flex flex-col gap-4 px-6'>
                {recipes?.map(r => <Card key={r.id} recipe={r} />)}
            </div>
        </div>
    );
}

export default CardList;

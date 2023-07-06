import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './components/Home';

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          'https://api.chucknorris.io/jokes/categories'
        );
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mx-auto">
              <h2 className='fw-bold mb-5' style={{color:"limegreen"}}>Chuck Norries</h2>
          </div>
        </div>

        <div className='row mx-auto'>
              {categories.map(category => (
                <div className='col-md-12 mb-5 m-auto' key={category} xs={12} sm={6} md={4} style={{width:"280px"}}>
                  <Home category={category} content="Unlimited Jokes On"/>
                </div>
              ))}
        </div>
      </div>
    );
};

export default App;



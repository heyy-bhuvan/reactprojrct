import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const [groceries, setGroceries] = useState([
    {
      id: 1,
      name: 'Apple',
      price: '$2.00',
      image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce', // Apple image
    },
    {
      id: 2,
      name: 'Banana',
      price: '$1.50',
      image: 'https://tse2.mm.bing.net/th?id=OIP.VWk3BpwznL_qitkaxUwFcAHaFe&pid=Api&P=0&h=180', // Banana image
    },
    {
      id: 3,
      name: 'Orange',
      price: '$3.00',
      image: 'https://tse2.mm.bing.net/th?id=OIP._1oK1I26Ku1yLqsT7gcvYQHaE8&pid=Api&P=0&h=180', // Orange image
    },
    {
      id: 4,
      name: 'Milk',
      price: '$4.00',
      image: 'https://tse2.mm.bing.net/th?id=OIP.7lpq8CZBC1A3MstCacEIVgHaHa&pid=Api&P=0&h=180', // Milk image
    },
    {
      id: 5,
      name: 'Bread',
      price: '$2.50',
      image: 'https://tse3.mm.bing.net/th?id=OIP.aGm86Gqp6yyL0PaztbWFpAHaE8&pid=Api&P=0&h=180', // Bread image
    },
    {
      id: 6,
      name: 'Eggs',
      price: '$1.99',
      image: 'https://tse1.mm.bing.net/th?id=OIP.CDo_CPkDsY1-ahcGLE01NwHaFB&pid=Api&P=0&h=180', // Eggs image
    },
    {
      id: 7,
      name: 'Carrot',
      price: '$0.99',
      image: 'https://tse3.mm.bing.net/th?id=OIP.tr38uLM7QBOLElGJHG88eQHaEi&pid=Api&P=0&h=180', // Carrot image
    },
    {
      id: 8,
      name: 'Broccoli',
      price: '$1.50',
      image: 'https://tse3.mm.bing.net/th?id=OIP.zeKqXlUZor5fT88s0IVDhQHaEm&pid=Api&P=0&h=180', // Broccoli image
    },
    {
      id: 9,
      name: 'Tomato',
      price: '$2.30',
      image: 'https://tse4.mm.bing.net/th?id=OIP.HiwZb7pY_PaooR59RRIHBgHaGK&pid=Api&P=0&h=180', // Tomato image
    },
    {
      id: 10,
      name: 'Cheese',
      price: '$5.00',
      image: 'https://tse3.mm.bing.net/th?id=OIP.uMo5dC_O9HqZcleNpwyLzgHaE8&pid=Api&P=0&h=180', // Cheese image
    },
    {
      id: 11,
      name: 'Butter',
      price: '$3.99',
      image: 'https://tse3.mm.bing.net/th?id=OIP.p72nqloxw2SVlLQ7AMSSUQHaFj&pid=Api&P=0&h=180', // Butter image
    },
    {
      id: 12,
      name: 'Chicken',
      price: '$7.99',
      image: 'https://tse4.mm.bing.net/th?id=OIP.uX6gNNsZGwXAQyXT382R1QHaFu&pid=Api&P=0&h=180', // Chicken image
    },
    {
      id: 13,
      name: 'Grapes',
      price: '$3.00',
      image: 'https://tse3.mm.bing.net/th?id=OIP.n9X6zDWBySnT1Yek3woi2gHaFj&pid=Api&P=0&h=180', // Grapes image
    },
    {
      id: 14,
      name: 'Potatoes',
      price: '$1.20',
      image: 'https://tse2.mm.bing.net/th?id=OIP.F0aQXnmCDGEadfNivihUAQHaF8&pid=Api&P=0&h=180', // Potatoes image
    },
    {
      id: 15,
      name: 'Cucumber',
      price: '$1.10',
      image: 'https://tse1.mm.bing.net/th?id=OIP.e5XlI-BDQp5h4IOZN9FgNAHaFj&pid=Api&P=0&h=180', // Cucumber image
    },
    {
      id: 16,
      name: 'Onions',
      price: '$0.80',
      image: 'https://tse3.mm.bing.net/th?id=OIP.DvuQmtG2WWcmdxzkGlYyYwHaE8&pid=Api&P=0&h=180', // Onions image
    },
  ]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="home-container">
      <h1>Welcome to the Grocery Management System</h1>
      <p>Browse through our extensive collection of groceries!</p>

      <div className="grocery-list">
        {groceries.map((item) => (
          <div key={item.id} className="grocery-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

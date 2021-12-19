// import logo from './logo.svg';
// import './App.css';

import Container from './components/Container/Container';
import Section from './components/Section/Section';
import Profile from './components/Profile/Profile';
import profile from './components/Profile/profile.json';
import StatisticList from './components/Statistics/StatisticList';
import statisticalData from './components/Statistics/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';



function App() {
  return (
        <Container>
            <Section>
                <Profile
                    name={profile.name}
                    tag={profile.tag}
                    location={profile.location}
                    avatar={profile.avatar}
                    followers={profile.stats.followers}
                    views={profile.stats.views}
                    likes={profile.stats.likes}
                />
            </Section>
            <Section title="Upload stats">
                <StatisticList stats={statisticalData} />
            </Section>
            <Section>
                <FriendList friends={friends} />
            </Section>
            <Section>
                <TransactionHistory items={transactions} />
            </Section>
        </Container>
  );
}

export default App;

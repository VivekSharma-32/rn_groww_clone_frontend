import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import CustomTab from '../../components/dashboard/CustomTab';
import StockHeader from '../../components/stocks/StockHeader';
import Explore from '../../components/stocks/Explore';
import Holdings from '../../components/stockholdings/Holdings';
import WatchList from '../../components/watchlist/WatchList';
import AddWatchlist from '../../components/watchlist/AddWatchlist';

const StockTab: FC = () => {
  const MyTabs = [
    {
      name: 'Explore',
      component: <Explore />,
    },
    {
      name: 'Holdings',
      component: <Holdings />,
    },
    {
      name: "Vivek's WatchList",
      component: <WatchList />,
    },
    {
      name: 'Watchlist',
      component: <AddWatchlist />,
    },
  ];
  return <CustomTab tabs={MyTabs} Header={StockHeader} />;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    overflow: 'hidden',
    paddingBottom: 0,
  },
  box: {
    height: 250,
    width: '100%',
  },
  boxA: {
    backgroundColor: 'white',
  },
  boxB: {
    backgroundColor: '#d8d8d8',
  },
});

export default StockTab;

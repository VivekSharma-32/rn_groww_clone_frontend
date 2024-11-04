import {SheetDefinition, registerSheet} from 'react-native-actions-sheet';
import CreateWatchlistSheet from './CreateWatchListSheet';

registerSheet('create-watchlist', CreateWatchlistSheet);

declare module 'react-native-actions-sheet' {
  interface Sheets {
    'create-watchlist': SheetDefinition<{
      payload: {
        message: string;
      };
      returnValue: boolean;
    }>;
  }
}
export {};

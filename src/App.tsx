import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CardCreationManager from './components/card-creation-manager';
import CardUpdateManager from './components/card-update.page';
import PlayManager from './components/play.page';
import React, { Suspense } from 'react';

const CardListManager = React.lazy(() => import('./components/card-list-manager'));

export const App = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<CardListManager />} />
          <Route path="/play" element={<PlayManager />} />
          <Route path="/cards" element={<CardListManager />} />
          <Route path="/cards/create" element={<CardCreationManager />} />
          <Route path="/cards/:cardId" element={<CardUpdateManager />} />

          {/* <Route index element={< />} /> */}
          {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

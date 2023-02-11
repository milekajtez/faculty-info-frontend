import React from 'react';
import { HomeH1, HomeWrapper, HomeWelcome, HomeContent } from './Home.styled.js';
import { UserForm } from '../User/UserForm.js';
import { homeMessages, titleMessage, welcomeMessage } from './HomeMessages.js';

export function Home() {
  return (
    <>
      <HomeWelcome>{welcomeMessage}</HomeWelcome>
      <HomeWrapper>
        {homeMessages.map((item, index) => {
          return (
            <HomeH1 key={index} title={titleMessage}>
              {item}
            </HomeH1>
          );
        })}
      </HomeWrapper>
      <HomeContent>
        <UserForm />
      </HomeContent>
    </>
  );
}

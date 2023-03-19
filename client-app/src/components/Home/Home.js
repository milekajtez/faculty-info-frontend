import React, { useEffect } from 'react';
import { HomeH1, HomeWrapper, HomeWelcome, HomeContent } from './Home.styled.js';
import { UserForm } from '../Authentification/UserForm.js';
import { homeMessages, titleMessage, welcomeMessage } from './HomeMessages.js';
import { checkSession, redirectLoggedUserToExpectedPage } from '../../helpers/sessionHelper.js';
import { useNavigate } from 'react-router-dom';

export function Home(props) {
  const navigate = useNavigate();

  useEffect(() => {
    redirectLoggedUserToExpectedPage(checkSession(), navigate);
  }, []);

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
        <UserForm session={props.session} setSession={props.setSession} />
      </HomeContent>
    </>
  );
}

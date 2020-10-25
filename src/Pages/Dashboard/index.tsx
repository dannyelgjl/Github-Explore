import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import githubImage from '../../assets/logo-github.svg';
import Repository from '../Repository';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={githubImage} alt="Github Explore" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit" >Pesquisar</button>
      </Form>
      <Repositories>
        <a href="#">
          <img src="https://avatars1.githubusercontent.com/u/54491980?s=460&u=5457192f7674845b14a107f7791033cfcbabb036&v=4" alt="Daniel Gomes" />
          <div>
            <strong>dannyelgjl/HappyApp</strong>
            <p>Projeto desenvolvido na semana NLW da Rocketseat</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="#">
          <img src="https://avatars1.githubusercontent.com/u/54491980?s=460&u=5457192f7674845b14a107f7791033cfcbabb036&v=4" alt="Daniel Gomes" />
          <div>
            <strong>dannyelgjl/HappyApp</strong>
            <p>Projeto desenvolvido na semana NLW da Rocketseat</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="#">
          <img src="https://avatars1.githubusercontent.com/u/54491980?s=460&u=5457192f7674845b14a107f7791033cfcbabb036&v=4" alt="Daniel Gomes" />
          <div>
            <strong>dannyelgjl/HappyApp</strong>
            <p>Projeto desenvolvido na semana NLW da Rocketseat</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="#">
          <img src="https://avatars1.githubusercontent.com/u/54491980?s=460&u=5457192f7674845b14a107f7791033cfcbabb036&v=4" alt="Daniel Gomes" />
          <div>
            <strong>dannyelgjl/HappyApp</strong>
            <p>Projeto desenvolvido na semana NLW da Rocketseat</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;
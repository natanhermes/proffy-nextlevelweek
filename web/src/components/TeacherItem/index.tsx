import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/12420237?v=4" alt="Natã Hermes" />
                <div>
                    <strong>Natã Hermes</strong>
                    <span>JavaScript</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      <br /><br />
                      Aperiam facere deleniti eos eligendi ipsum optio sunt, nostrum voluptate cumque maxime impedit sit beatae, voluptas laudantium, reprehenderit corporis minus? Sit, facilis!
                  </p>
            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                          Entrar em contato
                      </button>
            </footer>
        </article>
    );
}

export default TeacherItem;
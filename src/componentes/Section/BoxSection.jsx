import React from "react";
import { Link } from "react-router-dom";
import styles from "./BoxSection.module.css"



const BoxSection = () => {
    return (
        <div className={styles.BoxSection}>
            <div className={styles.Box_container}>
                <h2>Você Sabe <span>distribuir</span> sua <span>música?</span></h2>
                <div className={styles.ImgSection}>
                    <img className={styles.BannerPlataformas} src="/assets/imgs/plataformas.svg" alt="Banner de plataformas de distruibção digital" />
                </div>
                <div className={styles.BoxCards}>
                    <div className={styles.Cards}>
                        <div><Link to="/marketing">Marketing</Link></div>
                        <div><Link to="/digital">Distribuição Digital</Link></div>
                        <div><Link to="/qualidade">Qualidade Sonora</Link></div>
                    </div>
                </div>
                <div className={styles.BoxText}>
                    <p>
                        Com o marketing certo e a distribuição feita de forma correta, aumentam a probabilidade da sua arte
                        alavancar.
                    </p>
                    <p>
                        É muito importante para o artista ou produtor fonográfico saber utilizar essas ferramentas que são
                        poderosas.
                    </p>
                    <p>
                        Aqui na Book você consegue isso: uma equipe pronta e mais do que capaz de te entregar o serviço que sua
                        arte precisa.
                    </p>
                </div>
                <div className={styles.SongInfo}>
                    <h3>Entenda a diferença entre <span>mixar</span> e <span>masterizar</span></h3>
                    <div className={styles.SongText}>
                        <p>
                            A mixagem e a masterização são procedimentos técnicos distintos que, apesar de utilizarem as mesmas
                            ferramentas, são realizados separadamente – primeiro a mixagem e por fim a masterização, última etapa na
                            pós-produção de uma música. O resultado final e a qualidade do som dependem destes processos para
                            chegarem a um nível satisfatório e os engenheiros de áudio são os responsáveis por isso. Por vezes esses
                            profissionais são conhecidos como engenheiros de som, e alguns deles não possuem formação acadêmica
                            clássica, sendo que adquirem conhecimentos através de cursos livres e muita prática.</p>

                        <p>Entenda melhor o que é cada um destes procedimentos técnicos e porquê os estúdios de mixagem e
                            masterização realizam tal trabalho de pós-produção musical:</p>


                        <p>Mixagem
                            Processo que pode levar de seis a doze horas, a depender da duração da faixa e da quantidade de
                            instrumentos gravados, a mixagem confere à música uma qualidade profissional. Com cada voz e instrumento
                            sendo gravado em um canal particular para ser trabalhado separadamente na mixagem, esta técnica ajusta
                            individualmente os respectivos níveis de volume e faz a canção soar equilibrada.</p>

                        <p>Neste processo, o som é equalizado e comprimido para eliminar possíveis frequências conflitantes e
                            garantir sincronia e fluidez à faixa. Na mixagem também é possível incluir efeitos sonoros (como eco ou
                            reverb) e outros elementos para dar a forma desejada à música – e deixá-la mais vibrante, intensa ou
                            delicada. Uma boa mixagem acaba, por fim, facilitando o processo de masterização e também apresenta um
                            certo grau de criatividade e arte, visto que os DJs são mestres nesta arte de mixar diferentes sons e
                            criar novas formas a partir de outras músicas e gravações.</p>


                        <p>Masterização
                            A masterização é o último tratamento recebido pela música, ou por um conjunto de músicas de um álbum,
                            que foram gravadas em um determinado projeto. É nesta etapa que os estúdios de masterização eliminam
                            deficiências (como ruídos ou sibilos) e fazem com que o som seja capaz de ser reproduzido com boa
                            qualidade em diferentes plataformas e sistemas de som: computadores, televisões, Smartphones, caixas de
                            som, etc.</p>

                        <p>Para conseguir isso, a masterização também se utiliza de técnicas como compressão, equalização e ajuste
                            de volume – só que a execução é feita em todas as faixas do projeto, garantindo com que soem de maneira
                            uniforme e com volumes e pressões sonoras semelhantes.</p>

                        <p>A masterização ainda promove o equilíbrio espacial esquerda-direita de cada instrumento e certifica às
                            músicas um aspecto profissional de alta qualidade. Chega a ser gritante a diferença entre uma faixa
                            masterizada em um home studio e em um estúdio profissional. Não é a toa que os equipamentos de áudio de
                            qualidade apresentam um grande valor e podem determinar o sucesso do artista, em conjunto com os
                            produtores e engenheiros de som.</p>
                        <a href="https://portalacustica.info/estudios-de-mixagem-e-masterizacao/" target="_blank"
                            id="referencia">Font: Portal Acustica</a>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default BoxSection;
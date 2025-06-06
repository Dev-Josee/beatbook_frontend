import React from "react";

import styles from './Digital.module.css';

const Digital = () => {
    return (
        <section className={styles.DigitalAll}>
            <main className={styles.content}>
                <div className={styles.HeaderTop}>
                    <h1 className={styles.digitalTitle}>Distribuição Digital de Música</h1>
                    <p className={styles.digitalP}>Transformando a indústria musical: Como a distribuição digital está revolucionando o alcance, o impacto e o valor dos artistas no mercado global</p>
                </div>

                <section className={styles.container}>
                    <h2>A Importância da Distribuição Digital</h2>
                    <p>A distribuição digital de música transformou completamente a indústria musical, democratizando o acesso ao mercado global e permitindo que artistas independentes alcancem públicos que antes eram inacessíveis sem o apoio de grandes gravadoras.</p>
                    <div className={styles.Card_container}>
                        <div className={styles.cards}>
                            <img src="/assets/imgs/Mkd.png" alt="Marketing Digital" />
                            <div className={styles.cards_content}>
                                <h3>Alcance Global Instatâneo</h3>
                                <p>Com a distribuição digital, sua música pode estar simultaneamente disponível em mais de 150 plataformas de streaming e lojas digitais em todo o mundo, eliminando barreiras geográficas.</p>
                            </div>
                        </div>
                        <div className={styles.cards}>
                            <img src="/assets/imgs/Alcance.png" alt="Alcance globval"  />
                            <div className={styles.cards_content}>
                                <h3>Independência Artística</h3>
                                <p>Artistas mantêm o controle criativo total sobre sua música, direitos autorais e estratégias de lançamento, sem necessidade de comprometer sua visão artística para se encaixar em demandas comerciais.</p>
                            </div>
                        </div>
                        <div className={styles.cards}>
                            <img src="/assets/imgs/Dados.png" alt="Dados e analytics" />
                            <div className={styles.cards_content}>
                                <h3>Dados e Analytics</h3>
                                <p>Acesso a informações detalhadas sobre desempenho, incluindo quem está ouvindo, onde, quando e como, permitindo decisões estratégicas baseadas em dados reais de consumo.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.highlight}>
                        <h2>Você Sabia?</h2>
                        <p>Antes da distribuição digital, menos de 5% das músicas produzidas globalmente chegavam ao mercado comercial. Hoje, mais de 60.000 novas faixas são adicionadas às plataformas de streaming diariamente, criando o mercado musical mais diverso e acessível da história.</p>
                    </div>
                    <div className={styles.highlightTopic}>
                        <div className={styles.barraSeparator}></div>
                        <p>"A distribuição digital não é apenas um canal de distribuição, mas uma revolução democrática que transformou a relação entre artistas, público e indústria. Nunca foi tão viável construir uma carreira musical independente em escala global."</p>
                    </div>
                    <div className={styles.highlightCards}>
                        <div className={styles.highlightContent}>
                            <p>Crescimento do Streaming</p>
                            <p>25%</p>
                            <p>Aumento anual nas receitas globais</p>
                        </div>
                        <div className={styles.highlightContent}>
                            <p>Artistas Independentes</p>
                            <p>34%</p>
                            <p>Do mercado global de música</p>
                        </div>
                        <div className={styles.highlightContent}>
                            <p>Plataformas</p>
                            <p>150+</p>
                            <p>Disponíveis para distribuição</p>
                        </div>
                    </div>
                </section>

                <section className={styles.container}>
                    <div className={styles.topImpact}>
                        <h2>O Impacto na Indústria e nos Artistas</h2>
                        <p>A distribuição digital não apenas mudou como a música é consumida, mas também transformou fundamentalmente as estruturas de poder da indústria, o desenvolvimento de carreiras artísticas e os modelos de negócio que sustentam o ecossistema musical.</p>
                        <div className={styles.cards}>
                            <div className={styles.Card_container}>
                                <div className={styles.cards}>
                                    <img src="/assets/imgs/Democratização.png" alt="Marketing Digital" />
                                    <div className={styles.cards_content}>
                                        <h3>Democratização do Mercado</h3>
                                        <p>O acesso direto às plataformas de streaming desafiou o monopólio das grandes gravadoras, permitindo que artistas independentes compitam em igualdade de condições no mercado global.</p>
                                    </div>
                                </div>
                                <div className={styles.cards}>
                                    <img src="/assets/imgs/Mkd.png" alt="Marketing Digital" />
                                    <div className={styles.cards_content}>
                                        <h3>Novas Formas de Descoberta</h3>
                                        <p>Algoritmos de recomendação e playlists curadores transformaram como os ouvintes descobrem música, criando oportunidades para artistas emergentes ganharem visibilidade sem grandes orçamentos de marketing.</p>
                                    </div>
                                </div>
                                <div className={styles.cards}>
                                    <img src="/assets/imgs/Mkd.png" alt="Marketing Digital" />
                                    <div className={styles.cards_content}>
                                        <h3>Modelos de Carreira Sustentáveis</h3>
                                        <p>A distribuição digital permite que artistas construam bases de fãs dedicados e fluxos de receita diversificados, criando carreiras sustentáveis fora do modelo tradicional de "hits" da indústria.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3>Mudanças nos Modelos de Negócios</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Modelo Tradicional</th>
                                    <th>Modelo Digital</th>
                                </tr>
                                <tr>
                                    <td>
                                        Contratos de gravadora com adiantamentos e cessão de direitos
                                    </td>
                                    <td>
                                        Retenção de direitos autorais e controle criativo pelos artistas
                                    </td>
                                </tr>
                                <tr>
                                    <th>Foco em vendas físicas e downloads</th>
                                    <th>Receitas recorrentes de streaming e múltiplias fontes</th>
                                </tr>
                                <tr>
                                    <th>Marketing de massa com grandes orçamentos</th>
                                    <th>Marketing digital direcionado e estratégias de nicho</th>
                                </tr>
                                <tr>
                                    <th>Ciclos longos de lançamento de álbuns</th>
                                    <th>Lançamentos frequentes de singles e conteúdo contínuo
                                    </th>
                                </tr>
                                <tr>
                                    <th>Dependência de rádio e TV para promoção</th>
                                    <th>Mútiplos canais diretos entre artistas e fãs</th>
                                </tr>
                            </tbody>
                        </table>
                        <div className={styles.highlight}>
                            <h3>Redefinindo o Sucesso</h3>
                            <p>O impacto mais profundo da distribuição digital talvez seja a redefinição do que significa "sucesso" na música. Hoje, muitos artistas prosperam com bases de fãs de nicho altamente engajadas em vez de perseguir hits mainstream, permitindo uma maior diversidade de vozes e estilos na indústria.</p>
                        </div>

                    </div>
                </section>
                <section className={styles.container}>
                    <h2>Geração de Valor para Música e Artistas</h2>
                    <p>A distribuição digital criou novas e diversificadas formas de geração de valor, expandindo significativamente as oportunidades de monetização além dos modelos tradicionais de venda de discos e shows.</p>
                    <div className={styles.step}>
                        <div className={styles.steps}>
                            <h3>Royalties de Streaming</h3>
                            <p>Embora os valores por stream individual sejam relativamente baixos, o volume acumulado ao longo do tempo e o alcance global podem gerar fluxos de receita significativos e recorrentes para artistas com catálogos ativos.</p>
                        </div>
                        <div className={styles.steps}></div>
                        <div className={styles.steps}></div>
                        <div className={styles.steps}></div>
                        <div className={styles.steps}></div>
                    </div>
                </section>

            </main>
        </section>
    )
};

export default Digital;
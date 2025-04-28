# TRABALHO-MOBILE-MATEUS-E

Este repositório contém um aplicativo móvel desenvolvido com React Native, focado em fornecer informações sobre módulos automotivos essenciais. O design da interface do usuário é simples, mas altamente interativo, utilizando o efeito de parallax scrolling para tornar a navegação mais interessante. A tela inicial do aplicativo é projetada para exibir informações sobre diferentes módulos automotivos, como ECU (Engine Control Unit), TCM (Transmission Control Module), BCM (Body Control Module) e ABS (Anti-lock Braking System Module), com descrições claras e objetivas de suas funções.

Ao carregar a tela, uma imagem de fundo é exibida no cabeçalho, criando um destaque visual atraente, enquanto as informações sobre cada módulo são organizadas de forma a serem facilmente acessíveis. O aplicativo inclui componentes personalizados, como o ThemedText e ThemedView, que ajudam a garantir uma apresentação coesa e estilizada do conteúdo. Também é usado o componente HelloWave, que adiciona uma animação simpática, tornando a interface mais amigável e interativa.

A estrutura do código é clara e bem organizada, com ênfase na responsividade entre plataformas, ajustando automaticamente o conteúdo com base no dispositivo em uso. A tecla de atalho para abrir o menu de desenvolvimento é ajustada conforme a plataforma, oferecendo uma experiência de usuário ainda mais fluida. O aplicativo também é projetado para funcionar bem tanto em dispositivos móveis quanto na versão web, com um design que se adapta facilmente a diferentes tamanhos de tela.

Os estilos utilizados no aplicativo são definidos com o StyleSheet.create(), utilizando propriedades de layout flexível para garantir que os elementos sejam posicionados corretamente. O uso de componentes de texto estilizados, como subtitle e defaultSemiBold, permite que o conteúdo seja apresentado de forma clara e estruturada. A imagem do cabeçalho é posicionada de forma absoluta para destacar o conteúdo logo no topo da tela, tornando a interface mais atraente.

Para rodar o aplicativo, basta instalar as dependências necessárias do React Native e executar os comandos para Android ou iOS, dependendo da plataforma que você está utilizando. A versão web também pode ser acessada com a configuração adequada. Ao abrir o aplicativo, o usuário terá acesso a uma navegação fluida e interativa, com uma apresentação visual e educacional das funcionalidades dos módulos automotivos, tornando o aprendizado sobre esses componentes mais acessível e envolvente.

![image](https://github.com/user-attachments/assets/38ba1401-59e2-4b09-9ef8-b7da88aa9dab)

Este repositório contém um aplicativo desenvolvido com React Native, que tem como foco o ensino e a explicação de peças e componentes de motores automotivos. O design da interface foi pensado para ser interativo e educativo, oferecendo uma experiência de aprendizado enriquecedora. O aplicativo utiliza o efeito de parallax scrolling, proporcionando uma navegação suave e visualmente atraente, com uma imagem de fundo no cabeçalho que se move conforme o usuário rola a tela.

Na tela principal, o aplicativo apresenta informações sobre diferentes peças de motores. O conteúdo está organizado em seções que podem ser expandidas ou contraídas, graças ao componente Collapsible, o que permite que o usuário explore os tópicos conforme sua preferência. Cada seção oferece uma descrição detalhada sobre as peças, como o bloco de motor, cabeçote, pistão, virabrequim e comando de válvulas, e também inclui links externos para mais informações, como vídeos educacionais e artigos especializados.

Além disso, o aplicativo apresenta uma imagem ilustrativa de um motor completo, e também inclui links para vídeos interessantes sobre motores, como o famoso "Dodge Ram Explodindo Motor" e "Montagem de Motor de Caminhão". Estes vídeos são fornecidos como recursos adicionais para ajudar os usuários a entender melhor o funcionamento e a importância dessas peças e sistemas.

A interface é personalizada com o uso de componentes estilizados como ThemedText e ThemedView, o que garante uma apresentação visual coesa e agradável. A imagem de fundo do cabeçalho é carregada de maneira eficiente, garantindo que a tela fique visualmente atrativa desde o início. O estilo de cada texto é configurado com diferentes tipos, como título e subtítulo, para garantir clareza e uma hierarquia visual eficaz.

O aplicativo é projetado para ser leve e de fácil navegação, com uma interface simples que permite ao usuário explorar o conteúdo de maneira intuitiva. O código é estruturado de forma a garantir que o conteúdo se ajuste bem em diferentes plataformas, seja no iOS, Android ou web, tornando-o acessível para um público mais amplo. Para rodar o aplicativo, basta configurar o ambiente de desenvolvimento React Native, instalar as dependências necessárias e executar os comandos apropriados para a plataforma desejada.

Com esse projeto, os usuários podem aprender sobre peças de motores de forma interativa, explorando vídeos e imagens ilustrativas que detalham a construção e o funcionamento desses componentes essenciais.


![image](https://github.com/user-attachments/assets/3f3080a7-5d98-4d35-bbfc-6ba1508c8dcf)

Este repositório contém um aplicativo React Native que exibe uma lista interativa de marcas de carros. O aplicativo utiliza uma API pública para buscar informações sobre as marcas de carros e apresenta os dados de forma dinâmica e interativa com a ajuda de componentes personalizados. A interface é estruturada com um efeito de parallax scrolling, oferecendo uma navegação suave e agradável para os usuários.

Ao carregar a tela, o aplicativo busca as marcas de carros a partir da API da National Highway Traffic Safety Administration (NHTSA). Enquanto a informação está sendo carregada, uma mensagem de "Carregando..." é exibida. Caso ocorra algum erro durante o processo de obtenção dos dados, uma mensagem de erro é apresentada ao usuário. Após a conclusão da requisição, o aplicativo exibe uma lista de marcas de carros, onde cada item pode ser expandido para mostrar mais detalhes. Cada marca é apresentada dentro de um componente Collapsible, o que permite ao usuário interagir e explorar o conteúdo de maneira intuitiva.

Além de exibir o nome da marca de carro, cada entrada também inclui um link fictício (representado por um ExternalLink), que pode ser configurado para direcionar o usuário a uma página de mais informações sobre a marca, caso deseje explorar mais a fundo. O design é limpo e simples, com um cabeçalho estilizado que inclui uma imagem de fundo, tornando a interface mais visualmente atraente.

O estado do aplicativo é gerenciado utilizando o useState, com variáveis para armazenar as marcas de carros, controlar o carregamento e tratar erros. O useEffect é utilizado para fazer a chamada assíncrona à API assim que o componente for montado, garantindo que as marcas de carros sejam carregadas e apresentadas ao usuário de maneira eficiente.

Os estilos do aplicativo são definidos com o StyleSheet.create(), usando uma combinação de propriedades de layout para garantir que os elementos sejam posicionados adequadamente. O componente ParallaxScrollView é usado para implementar o efeito de parallax, criando uma experiência de rolagem suave, enquanto o cabeçalho é posicionado de forma absoluta para se ajustar ao layout da tela.

Este aplicativo é uma boa introdução a como trabalhar com APIs externas em React Native e como criar interfaces interativas e responsivas. Ele também exemplifica como lidar com estados assíncronos, exibir erros e gerenciar a interface do usuário de forma eficiente.


![image](https://github.com/user-attachments/assets/354d11e2-0a5e-4587-b288-281957fb2032)

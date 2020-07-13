var app = angular.module("indexApp", []);

app.controller("indexController", function($scope){

    $scope.services = [

        {
            image: {
                src: "_images/itsm.png",
                alt: "Ícone ITSM da Lyle Corp"
            },
            title: "ITSM - Gestão de Serviços",
            shortDescription: "Transforme o impacto, a velocidade e a entrega da TI. Forneça serviços incríveis, aumente a produtividade e obtenha novas idéias.",
            benefits: ["Melhore a experiência de serviço", "Remova as dificuldades com a mobilidade", "Melhore a produtividade da TI", "Adquira novos insights", "Consolide os serviços de TI"],
            features: ["Gestão de Incidentes", "Gestão de Problemas", "Gestão de Mudanças", "Gestão de Solicitações", "Aplicativo Mobile", "Entre outras"],
            video: {
                src: undefined
            }
        },

        {
            image: {
                src: "_images/itbm.png",
                alt: "Ícone ITBM da Lyle Corp"
            },
            title: "ITBM - Gestão de Projetos",
            shortDescription: "Entregue resultados ao negócio com velocidade e agilidade. Alinhe o trabalho às prioridades da empresa, redirecione os gastos e acelere o tempo para obter valor.",
            benefits: ["Gerencie resultados para criar valor", "Adapte o planejamento de acordo com as incertezas", "Ajuste a escala do trabalho para entregar resultados mais rápidos"],
            features: ["Gestão de Inovação", "Gestão de Demandas", "Gestão de Projestos", "Gestão Ágil", "Gestão de Testes", "Entre outras"],
            video: {
                src: undefined
            }
        },

        {
            image: {
                src: "_images/csm-lyle-corp.png",
                alt: "Ícone CSM da Lyle Corp"
            },
            title: "CSM - Gestão de atendimento ao Cliente",
            shortDescription: "Conecte o negócio com a TI e atenda as solicitações dos clientes de forma simples.",
            benefits: ["Aumente a satisfação do Cliente", "Impulsione os níveis de solução", "Aprimore a qualidade de produtos e serviços"],
            features: ["Gerenciamento de Casos", "Autoatendimento", "Comunidadades", "Entre outras"],
            video: {
                src: "https://www.youtube.com/embed/ktYPUwEVSf4"
            }
        },

        {
            image: {
                src: "_images/domain-separation-lyle-corp.png",
                alt: "Ícone Recursos Compartilhados da Lyle Corp"
            },
            title: "Recursos Compartilhados",
            shortDescription: "Usufrua dos módulos da plataforma ServiceNow mesmo sem obter uma instância. Problemas com custo? Nós podemos te ajudar!",
            benefits: ["Diminuição de custos", "Configurações inicias da instância realizadas"],
            features: ["Módulos ServiceNow", "Arquitetura ServiceNow", "Entre outras"],
            video: {
                src: undefined
            }
        },

        {
            image: {
                src: "_images/customization-lyle-corp.png",
                alt: "Ícone Desenvolvimento da Lyle Corp"
            },
            title: "Desenvolvimento",
            shortDescription: "Automatize processos de forma rápida. Crie aplicações modernas e seguras utilizando a plataforma ServiceNow.",
            benefits: ["Realização de Customizações", "Desenvolvimento de novas Aplicações", "Flexibilidade", "Velocidade no Desenvolvimento", "Arquitetura de ponta"],
            features: ["Arquitetura ServiceNow", "Notificações", "SLAs", "Portal", "Base de dados", "Infraestrutura", "Entre outras"],
            video: {
                src: undefined
            }            
        },

         

        {
            image: {
                src: "_images/support.png",
                alt: "Ícone Suporte da Lyle Corp"
            },
            title: "Suporte",
            shortDescription: "Garanta a saúde dos produtos ServiceNow implantados. Com nosso suporte você pode desenvolver melhorias e correções nas suas Aplicações.",
            benefits: ["Saúde das aplicações", "Agilidade nas correções", "Proatividade na descoberta de incidentes"],
            features: ["Suporte 24 x 7"],
            video: {
                src: undefined
            }
        }
        
    ];

    $scope.serviceSelected = {};

    $scope.setServiceSelected = function (service) {

        document.getElementById("player").src = service.video.src;

        $scope.serviceSelected = service;

    }

});
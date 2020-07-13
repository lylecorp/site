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
            features: ["Incident Management", "Problem Management", "Change Management", "Request Management", "Aplicativo Mobile", "Entre outras"],
            video: {
                src: "https://www.youtube.com/embed/dGooMB4Gdt0"
            }
        },

        {
            image: {
                src: "_images/itbm.png",
                alt: "Ícone ITBM da Lyle Corp"
            },
            title: "ITBM - Gestão de Projetos",
            shortDescription: "Entregue resultados ao negócio com velocidade e agilidade. Alinhe o trabalho às prioridades da empresa, redirecione os gastos e acelere o tempo para obter valor.",
            benefits: []
            
        },

        {
            image: {
                src: "_images/csm-lyle-corp.png",
                alt: "Ícone CSM da Lyle Corp"
            },
            title: "CSM - Gestão de atendimento ao Cliente",
            shortDescription: "Conecte o negócio com a TI e atenda as solicitações dos clientes de forma simples."
        },

        {
            image: {
                src: "_images/domain-separation-lyle-corp.png",
                alt: "Ícone Recursos Compartilhados da Lyle Corp"
            },
            title: "Recursos Compartilhados",
            shortDescription: "Usufrua dos módulos da plataforma ServiceNow mesmo sem obter uma instância. Problemas com custo? Nós podemos te ajudar!"
        },

        {
            image: {
                src: "_images/customization-lyle-corp.png",
                alt: "Ícone Desenvolvimento da Lyle Corp"
            },
            title: "Desenvolvimento",
            shortDescription: "Automatize processos de forma rápida. <br> Crie aplicações modernas e seguras utilizando a plataforma ServiceNow."            
        },

         

        {
            image: {
                src: "_images/support.png",
                alt: "Ícone Suporte da Lyle Corp"
            },
            title: "Suporte",
            shortDescription: "Garanta a saúde dos produtos ServiceNow implantados. Com nosso suporte você pode desenvolver melhorias e correções nas suas Aplicações."
        }
        
    ];

    $scope.serviceSelected = {
        image: {
            src: "_images/itsm.png",
            alt: "Ícone ITSM da Lyle Corp"
        },
        title: "ITSM - Gestão de Serviços",
        shortDescription: "Transforme o impacto, a velocidade e a entrega da TI. Forneça serviços incríveis, aumente a produtividade e obtenha novas idéias."
    };

    $scope.setServiceSelected = function (service) {

        $scope.serviceSelected = service;


    }

});
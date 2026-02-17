
import { Step, EnergyType } from './types';

export const INTRO_VIDEO_URL = "https://globalvale.sharepoint.com/teams/SSMARE/_layouts/15/stream.aspx?id=%2Fteams%2FSSMARE%2FDocumentos%20Compartilhados%2FSeguran%C3%A7a%20do%20Trabalho%2FRelat%C3%B3rios%20%C3%81reas%20%28BI%29%2FProjetos%20Correntes%2FFabiano%2DVideos%2Fintrodu%C3%A7%C3%A3o%20ao%20bloqueio%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E0978d83b%2D7f63%2D4581%2Dbbde%2D8c4a1489941c";

export const ENERGY_TYPES: EnergyType[] = [
  { 
    id: 'eletrica', 
    name: 'Elétrica', 
    icon: 'zap',
    color: 'amber',
    videoUrl: "https://globalvale.sharepoint.com/teams/SSMARE/_layouts/15/stream.aspx?id=%2Fteams%2FSSMARE%2FDocumentos%20Compartilhados%2FSeguran%C3%A7a%20do%20Trabalho%2FRelat%C3%B3rios%20%C3%81reas%20%28BI%29%2FProjetos%20Correntes%2FFabiano%2DVideos%2Feletrica%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ebc16cb05%2D9f42%2D4742%2D948a%2D06f8b703948a",
    description: 'Energia perigosa elétrica é toda forma de energia elétrica presente em um equipamento, instalação ou sistema que, se não for devidamente isolada, pode causar choque elétrico, arco elétrico, queimaduras, explosões ou qualquer outro risco grave ao trabalhador durante atividades de manutenção, inspeção ou intervenção.',
    mainRisks: [
      'Choque elétrico por contato direto ou indireto',
      'Queimaduras graves por arco elétrico',
      'Incêndios e / ou explosões em painéis',
      'Parada cardiorrespiratória'
    ],
    examples: [
      'Subestações e transformadores',
      'Painéis de CCM (Centro de Controle de Motores)',
      'Cabos de alimentação de pontes rolantes',
      'Baterias de empilhadeiras'
    ],
    safetySteps: [
      'Identificar painéis e disjuntores específicos.',
      'Testar ausência de tensão com multímetro calibrado.',
      'Aterrar o circuito se houver possibilidade de reenergização.'
    ]
  },
  { 
    id: 'hidraulica', 
    name: 'Hidráulica', 
    icon: 'droplets',
    color: 'blue',
    videoUrl: "https://v1.cdnpk.net/videvo_files/video/free/2014-07/large_watermarked/Blue_Liquid_Loop_preview.mp4",
    description: 'Energia perigosa hidráulica é toda energia associada à pressão de fluidos (óleo hidráulico) utilizados para acionar, movimentar ou manter componentes de máquinas e equipamentos. Quando não controlada, essa energia pode causar movimentos inesperados, rompimento de mangueiras, injeção de fluido, quedas, aprisionamento e outros acidentes graves.',
    mainRisks: [
      'Projeção de líquidos sob alta pressão',
      'Injeção de fluido sob a pele (risco de amputação)',
      'Movimentos inesperados de atuadores',
      'Queimaduras por óleo aquecido',
      'Esmagamento por queda de cargas suspensas'
    ],
    examples: [
      'Prensas e cilindros hidráulicos',
      'Unidades de Potência Hidráulica (UPH)',
      'Sistemas de direção de veículos pesados',
      'Acumuladores de pressão',
      'Tubulações Pressurizadas (Rejeitoduto, Tubulação de incêndio, etc.)'
    ],
    safetySteps: [
      'Aliviar pressão residual de acumuladores.',
      'Bloquear válvulas de admissão e retorno.',
      'Drenar o sistema em local seguro.'
    ]
  },
  { 
    id: 'pneumatica', 
    name: 'Pneumática', 
    icon: 'wind',
    color: 'sky',
    videoUrl: "https://static.videezy.com/system/resources/previews/000/012/654/original/Clouds_Slow.mp4",
    description: 'Energia perigosa pneumática é toda energia associada à pressão de ar comprimido utilizada para acionar, movimentar, travar ou auxiliar componentes de máquinas e equipamentos. Quando não controlada, essa energia pode causar explosões de mangueiras, movimentos inesperados, projeção de partículas, ruídos intensos, quedas, entre outros acidentes graves.',
    mainRisks: [
      'Explosão de mangueiras ou conexões',
      'Lançamento de partículas nos olhos',
      'Movimentos bruscos e violentos de pistões',
      'Ruído excessivo em descargas súbitas'
    ],
    examples: [
      'Compressores e reservatórios de ar',
      'Cilindros de ferramentas pneumáticas',
      'Válvulas solenoides e filtros de ar',
      'Sistemas de freio a ar'
    ],
    safetySteps: [
      'Fechar válvula de esfera e despressurizar linha.',
      'Verificar manômetros para confirmar pressão zero.',
      'Travar mecanicamente cilindros que possam cair.'
    ]
  },
  { 
    id: 'quimica', 
    name: 'Química', 
    icon: 'flask-conical',
    color: 'emerald',
    videoUrl: "https://v1.cdnpk.net/videvo_files/video/free/2014-06/large_watermarked/Glass_of_Water_Loop_preview.mp4",
    description: 'Energia perigosa química é toda energia armazenada ou liberada por substâncias químicas que, devido às suas propriedades físicas or reativas, podem causar incêndios, explosões, intoxicações, corrosões, queimaduras químicas, reações violentas ou qualquer dano ao trabalhador durante atividades de manutenção, limpeza, inspeção ou intervenção.',
    mainRisks: [
      'Intoxicação por inalação de vapores',
      'Queimaduras químicas na pele or olhos',
      'Explosão por mistura inesperada',
      'Danos ambientais por vazamento'
    ],
    examples: [
      'Tubulações de amônia ou cloro',
      'Tanques de armazenamento de ácido',
      'Linhas de combustível (diesel, gás natural)',
      'Reatores químicos'
    ],
    safetySteps: [
      'Consultar FISPQ do produto envolvido.',
      'Utilizar EPIs específicos (luvas, masks, macacões).',
      'Instalar flanges cegos (raquetes) para isolamento total.'
    ]
  },
  { 
    id: 'mecanica', 
    name: 'Mecânica', 
    icon: 'settings',
    color: 'slate',
    videoUrl: "https://v1.cdnpk.net/videvo_files/video/free/2014-06/large_watermarked/Machine_Gears_Loop_preview.mp4",
    description: 'Energia perigosa mecânica é toda forma de energia associada ao movimento, à força ou à capacidade de movimento de componentes de máquinas, equipamentos ou sistemas, que pode causar esmagamento, corte, arrasto, impacto, amputação, projeção de partes ou materiais, entre outros riscos graves durante atividades de manutenção, limpeza ou intervenção.',
    mainRisks: [
      'Esmagamento e prensagem de membros',
      'Corte e laceração por partes afiadas',
      'Aprisionamento em partes rotativas',
      'Impacto de peças que se soltam por inércia'
    ],
    examples: [
      'Polias, correias e correntes',
      'Eixos de motores e redutores',
      'Moinhos, britadores e misturadores',
      'Ventiladores e exaustores industriais'
    ],
    safetySteps: [
      'Aguardar parada total de inércia.',
      'Instalar pinos de travamento físico.',
      'Calçar partes móveis suspensas.'
    ]
  },
  { 
    id: 'nuclear', 
    name: 'Nuclear', 
    icon: 'radio',
    color: 'yellow',
    videoUrl: "https://v1.cdnpk.net/videvo_files/video/free/2014-07/large_watermarked/Nuclear_Power_Plant_preview.mp4",
    description: 'Energia perigosa nuclear é a energia proveniente de radiação ionizante emitida por fontes radioativas ou equipamentos de emissão. Quando não controlada, pode causar danos celulares graves, mutações genéticas, queimaduras radiológicas agudas e contaminação de superfícies e pessoas.',
    mainRisks: [
      'Mutação genética e câncer',
      'Queimaduras radiológicas (agudas)',
      'Contaminação de superfícies e pessoas',
      'Danos irreparáveis a tecidos internos'
    ],
    examples: [
      'Medidores de nível radioativos (fontes seladas)',
      'Equipamentos de gamagrafia industrial',
      'Aparelhos de Raio-X de inspeção',
      'Fontes de calibração laboratorial'
    ],
    safetySteps: [
      'Delimitar área de isolamento.',
      'Utilizar dosímetros individuais.',
      'Fechar obturadores (shutters) de fontes radioativas.'
    ]
  },
  { 
    id: 'gravitacional', 
    name: 'Gravitacional', 
    icon: 'dna',
    color: 'rose',
    videoUrl: "https://v1.cdnpk.net/videvo_files/video/free/2013-10/large_watermarked/Sky_High_preview.mp4",
    description: 'Energia perigosa gravitacional é a energia associada ao peso de objetos ou componentes que podem se mover, cair ou descer devido à força da gravidade. Essa energia representa risco quando uma carga elevada, sustentada ou suspensa pode se deslocar inesperadamente, provocando esmagamentos, impactos, quedas de materiais, aprisionamentos e outros acidentes graves durante intervenções, manutenção ou limpeza.',
    mainRisks: [
      'Queda de cargas sobre trabalhadores',
      'Tombamento de equipamentos instáveis',
      'Fechamento inesperado de tampas ou comportas',
      'Colapso de estruturas de suporte'
    ],
    examples: [
      'Elevadores e monta-cargas',
      'Prensas suspensas em manutenção',
      'Caçambas de caminhões ou carregadeiras',
      'Contrapesos de sistemas de tensão'
    ],
    safetySteps: [
      'Instalar escoras dimensionadas para a carga.',
      'Manter partes móveis na posição de menor energia (chão).',
      'Verificar integridade de travas de segurança.'
    ]
  },
  { 
    id: 'residual', 
    name: 'Residual', 
    icon: 'waves',
    color: 'indigo',
    videoUrl: "https://v1.cdnpk.net/videvo_files/video/free/2014-12/large_watermarked/Water_Droplet_In_Slow_Motion_preview.mp4",
    description: 'Energia que permanece armazenada nos sistemas, máquinas e equipamentos mesmo depois de serem bloqueados adequadamente e desligados da fonte. Pode ser mecânica, elétrica, química, hidráulica, térmica, potencial gravitacional ou qualquer outra energia utilizada.',
    mainRisks: [
      'Choque elétrico por carga em capacitores',
      'Disparo de molas tensionadas',
      'Pressão retida em trechos cegos de tubulação',
      'Movimento por vácuo ou calor residual'
    ],
    examples: [
      'Bancos de capacitores',
      'Molas de freios ou válvulas de segurança',
      'Pulsadores de ar comprimido',
      'Tubulações entre duas válvulas fechadas'
    ],
    safetySteps: [
      'Descarregar capacitores elétricos.',
      'Aliviar tensão de molas comprimidas.',
      'Purgar tubulações entre duas válvulas.'
    ]
  },
  { 
    id: 'termica', 
    name: 'Energia Térmica', 
    icon: 'thermometer',
    color: 'orange',
    videoUrl: "https://v1.cdnpk.net/videvo_files/video/free/2014-06/large_watermarked/Fire_At_Night_preview.mp4",
    description: 'Energia perigosa térmica é a energia associada a altas ou baixas temperaturas capazes de causar queimaduras, incêndios, explosões, choques térmicos, congelamento ou danos aos materiais e às pessoas durante atividades de manutenção, limpeza ou intervenção. Essa energia pode estar presente em superfícies, fluidos, vapores, equipamentos or processos industriais.',
    mainRisks: [
      'Queimaduras graves por vapor or superfícies quentes',
      'Hipotermia or queimaduras por gelo (criogenia)',
      'Explosão por expansão térmica de fluidos',
      'Danos oculares por radiação infravermelha'
    ],
    examples: [
      'Fornos e caldeiras industriais',
      'Tubulações de vapor saturado',
      'Sistemas de refrigeração por amônia or CO2',
      'Tanques de metal fundido'
    ],
    safetySteps: [
      'Aguardar resfriamento natural do equipamento.',
      'Monitorar temperatura com termômetros a laser.',
      'Utilizar mantas térmicas de isolamento.'
    ]
  },
];

export const BLOQUEIO_STEPS: Step[] = [
  { id: 1, title: "Identificação do Equipamento", description: "Identificar the equipamento que receberá intervenção na ordem de manutenção or ordem de serviço.", role: "Solicitante de bloqueio" },
  { id: 2, title: "Consulta à matriz de bloqueio", description: "Consultar a matriz de bloqueio e identificar as fontes de energia, pontos de bloqueio, fontes de energia residual, conforme atividade a ser executada.", role: "Solicitante de bloqueio" },
  { id: 3, title: "Solicitação de liberação do equipamento", description: "Solicitar e confirmar a liberação do equipamento para intervenção junto ao operador or responsável pelo equipamento.", role: "Solicitante de bloqueio" },
  { id: 4, title: "Preenchimento da etiqueta de sinalização", description: "Preencher a etiqueta de sinalização conforme anexo 01.", role: "Solicitante de bloqueio" },
  { id: 5, title: "Entrega da etiqueta de sinalização e cadeado", description: "Entregar a etiqueta de sinalização para atividade juntamente com o cadeado ao executante de bloqueio or ao oficial de bloqueio.", role: "Solicitante de bloqueio" },
  { id: 6, title: "Certificação da parada do equipamento", description: "Certificar-se que the equipamento está parado, em modo local e liberado para execução do bloqueio.", role: "Executante de bloqueio" },
  { id: 7, title: "Confirmação do equipamento a ser bloqueado", description: "Certificar-se que a fonte de energia será bloqueada conforme o TAG solicitado na etiqueta de sinalização para a atividade.", role: "Executante de bloqueio" },
  { id: 8, title: "Execução da manobra e instalação do bloqueio", description: "Executar a manobra e colocar o equipamento no estado de zero energia. Instalar o cadeado de bloqueio e a etiqueta de sinalização para atividade.", role: "Executante de bloqueio" },
  { id: 9, title: "Eliminação de energia residual", description: "Eliminar a energia perigosa residual e impedir o re-acúmulo quando aplicável. Checar se as medidas de controle adicionais foram adotadas.", role: "Executante de bloqueio" },
  { id: 10, title: "Preenchimento da etiqueta", description: "Preencher a etiqueta de sinalização conforme anexo 01 confirmando a execução do bloqueio e devolver para o solicitante a chave e a etiqueta (comprovante).", role: "Executante de bloqueio" },
  { id: 11, title: "Confirmação do estado operacional", description: "Confirmar junto ao operador or responsável pelo equipamento, o estado operacional após a execução do bloqueio.", role: "Solicitante de bloqueio" },
  { id: 12, title: "Teste de efetividade do bloqueio", description: "Realizar or acompanhar o teste de efetividade em conjunto com o operador/responsável pelo equipamento.", role: "Solicitante de bloqueio" },
  { id: 13, title: "Montagem da caixa de campo", description: "Depositar a chave dentro da caixa de bloqueio de campo e em seguida bloquear sua trava frontal instalando o cadeado juntamente com a etiqueta de sinalização e o cartão de identificação.", role: "Líder de Bloqueio" },
  { id: 14, title: "Bloqueio da caixa de campo", description: "Travar a lateral da caixa de bloqueio de campo com seu cadeado de bloqueio e o seu cartão de identificação do empregado.", role: "Executante(s) de Serviço" }
];

export const TRANSFERENCIA_STEPS: Step[] = [
  { id: 1, title: "Realizar a transferência do bloqueio para novo líder", description: "Preencher a etiqueta de transferência conforme anexo 01.", role: "Líder de bloqueio (atual)" },
  { id: 2, title: "Receber a transferência de bloqueio", description: "Preencher a etiqueta de transferência conforme anexo 01 e instalar na parte frontal da caixa de campo em conjunto com o cadeado.", role: "Líder de bloqueio (novo)" },
  { id: 3, title: "Bloqueio da caixa de campo pelos novos executantes", description: "Travar a lateral da caixa de bloqueio de campo com seu cadeado de bloqueio e o seu cartão de identificação do empregado.", role: "Executante(s) de Serviço" },
  { id: 4, title: "Montagem de caixa de campo", description: "Depositar a chave dentro da caixa de bloqueio de campo e em seguida, bloquear sua trava frontal instalando o cadeado juntamente com a etiqueta de sinalização e o cartão de identificação.", role: "Lider de Bloqueio" },
  { id: 5, title: "Bloqueio da caixa de campo pelos novos executantes", description: "Travar a lateral da caixa de bloqueio de campo com seu cadeado de bloqueio e o seu cartão de identificação do empregado.", role: "Executante(s) de Serviço" }
];

import {ITableDetails, ITableLeftCol} from "../types/app.interfaces";

class Table {
    public leftColText: ITableLeftCol = [
        "Ориентация на результат",
        "Организация работы и планирование",
        "Эффективная коммуникация",
        "Работа в команде",
        "Клиентоориентированность",
        "Честность и этичное поведение"
    ];
    public detailes: ITableDetails = [
        //Ориентация на результат
        [
            [
                "Ориентирован на процесс, а не на конечный результат. Часто не понимает или понимает неверно поставленные задачи и критерии достижения результата.",
                "Не выполняет свои должностные обязанности по одному или нескольким показателям (срок, качество, объем).",
                "Оценивает работу по количеству затраченного времени, а не по достигнутому результату.",
                "При столкновении со сложностями или невозможности выполнить работу не информирует руководителя/коллег. Ставит руководителя/команду перед фактом невыполнения задачи.",
                "Не принимает ответственность за допущенные ошибки, ищет оправдание и перекладывает ответственность на других."
            ],
            [
                "Ориентирован на  результат, а не на процесс. Ясно представляет необходимый результат и правильно понимает поставленные задачи.",
                "Выполняет свои должностные обязанности, соблюдая сроки, объемы и требования к качеству. ",
                "Оценивает работу по достигнутому результату, а не по количеству затраченного времени.",
                "При возникновении сложностей своевременно сообщает о них руководству/команде.",
                "Принимает ответственность за допущенные ошибки и исправляет их."
            ],
            [
                "Ориентирован на результат. Может сам определить контрольные точки простого процесса и правильно определить конечный результат работы. ",
                "В ряде случаев превышает показатели: сроки, объем, качество за оцениваемый период. Создает для себя критерии качества в рамках требований руководства (либо выше их).",
                "Оценивает работу по достигнутому результату, выбирая при этом оптимальное соотношение качества, сроков и объема.",
                "При возникновении сложностей своевременно сообщает о них руководству и предлагает варианты их преодоления.",
                "Принимает ответственность за допущенные ошибки, анализирует их, чтобы избежать повторения в будущем."
            ],
            [
                "Ориентирован на результат. Ставит перед собой сложные/амбициозные задачи. Может определить конечный результат командных задач и установить контрольные точки и сроки достижения. Мотивирует себя и коллег/сотрудников на достижение результата.",
                "Регулярно превышает показатели по срокам, объемам, качеству. Ориентирован на достижение высоких стандартов качества в работе. Демонстрирует высокое качество с первого раза.",
                "Оценивает работу по достигнутому результату. Определяет в работе оптимальный результат на основе соотношения качества, сроков и объема.",
                "Настойчив в преодолении препятствий. При необходимости сам предпринимает правильные действия, не дожидаясь указаний и подсказки.",
                "Всегда берет на себя ответственность за свои ошибки и общий результат команды. Проводит анализ и не допускает повторения в будущем в рамках сферы своего влияния."
            ]
        ],
        //Организация работы и планирование
        [
            [
                "Не может формулировать простые цели/задачи в рамках своих служебных обязанностей. Требует постоянного участия руководителя.",
                "Не может самостоятельно расставить приоритеты и/или следовать указаниям руководителя. Хватается за любую поставленную задачу, перескакивает с задания на задание, не понимая важность и срочность выполнения.",
                "Не знает, сколько времени нужно на выполнение тех или иных служебных задач. Часто может задерживать выполнение заданий.",
                "Требуется постоянный контроль над исполнением поручений. Часто занят ненужными делами, задачами - поглотителями времени.",
                "Не знает и не понимает, какие ресурсы и в каком объеме нужны для выполнения рабочих задач."
            ],
            [
                "Может самостоятельно ставить простые цели. С помощью руководителя формулирует более сложные и долгосрочные задачи.",
                "Правильно определяет порядок выполнения и расставляет приоритеты рутинных рабочих задач и/или четко следует плану заданий от руководителя.",
                "Знает, сколько времени нужно на выполнение рутинных/повторяющихся заданий. Большинство дел завершает в срок.",
                "В большинстве задач не требует контроля над выполнением. Самостоятельно отслеживает выполнение задач, редко отвлекается.",
                "Объективно оценивает и распределяет ресурсы, необходимые для выполнения своей работы."
            ],
            [
                "На основе целей подразделения формулирует цели для себя и своих подчиненных (*при наличии). Можете разделить сложную цель на задачи. Оперативно принимает меры по предупреждению отклонений и адаптирует поставленные цели в изменившихся условиях.",
                "Сохраняет эффективность работы в ситуации многозадачности. Корректно расставляет большинство рабочих задач по приоритетам, при необходимости консультируется с руководителем. ",
                "Понимает, сколько времени нужно на выполнение задач любой сложности, может правильно спрогнозировать сроки и своевременно внести необходимые корректировки.",
                "Не требуется контроль над выполнением задач. Согласовывает собственные планы с деятельностью других сотрудников. Избегает негативного влияния собственных действий на других.",
                "Объективно оценивает и распределяет ресурсы, необходимые для выполнения своей работы и простых командных задач."
            ],
            [
                "Формулирует цели и воодушевляет команду на эффективное их достижение. Планирует деятельность в среднесрочном и долгосрочном плане. Непрерывно оценивает достижения, вносит корректировки в случае отклонений.",
                "Управляет деятельностью с учетом экономической эффективности и стратегических приоритетов бизнеса. Создает культуру эффективности и управляет исполнением: эффективно и рационально организует свою работу и работу команды, осуществляет контроль и оценку исполнения. ",
                "Заблаговременно планирует свою деятельность и деятельность членов команды. Корректирует собственные планы с общим курсом организации.",
                "Не требуется контроль над выполнением заданий. Осуществляет контроль и координирует работу других сотрудников.",
                "Создает условия для эффективной работы команды, предоставляет все необходимые ресурсы: технические, информационные, временные и т.д."
            ]
        ],
        //"Эффективная коммуникация
        [
            [
                "Не может сформулировать и донести свои мысли и идеи доступным языком. Путается, не приводит аргументы.",
                "Не умеет слушать, часто перебивает, не слышит позицию собеседника. Не воспринимает идеи других, либо соглашается с ними бездумно.",
                "Демонстрирует грубое и/или высокомерное поведение в общении с окружающими, иногда умышленно создает конфликтные ситуации.",
                "Не может конструктивно высказать свое мнение, предоставить ОС: переходит на личности, может задеть или обидеть собеседника. Влияет на других, только опираясь на свои властные полномочия.",
                "Плохо взаимодействует с коллегами/гостями или испытывает сложности в общении с незнакомыми людьми."
            ],
            [
                "Чётко и ясно формулирует и излагает свои мысли. ",
                "Может выслушать собеседника, но не всегда слышит его точку зрения. Для убеждения использует ограниченный набор аргументов. Не адаптирует их под особенности и ожидания собеседника.",
                "Нейтрален в общении, вежлив в большинстве случаев. Не провоцирует конфликты и редко вступает в них.",
                "Не всегда может конструктивно высказать свое мнение и при этом не испортить отношения с другими людьми.",
                "Хорошо общается со знакомыми людьми, но может испытывать сложности в коммуникации с незнакомцами (неприветливый, стеснительный и т.д.). "
            ],
            [
                "Излагает мысли (устно и письменно) в четкой последовательности, на языке, понятном для получателя информации, исключает возможность двойного толкования, без орфографических ошибок и слов-паразитов. Может доступно объяснить сложную идею или задачу, привести убеждающие аргументы.",
                " Умеет слушать, используя приемы активного слушания, и слышать собеседника. Без искажений воспринимает получаемую информацию, не упускает важные аспекты и не вносит собственные непроверенные домыслы.",
                "Доброжелателен, улыбчив, вежлив при общении, при возникновении конфликтных ситуаций старается сгладить и урегулировать их.",
                "Конструктивно в положительном ключе высказать свое мнение, опирается на факты и действия, а не оценочные высказывания.",
                "Отлично взаимодействует со знакомыми и незнакомыми людьми. Легко получает и передает опыт через общение с коллегами.",
            ],
            [
                "Адаптирует стиль общения с учетом специфики ситуации и собеседника. Налаживает кросс-функциональную коммуникацию и необходимые деловые контакты. Аргументированно излагает свою позицию, отстаивает и обосновывает свое мнение, проясняет позицию собеседника. Корректно использует каналы коммуникации.  Является неформальным лидером. Создает культуру взаимодействия.",
                " Умеет слушать и действительно слышать собеседника. Собирает и верно воспринимает всю важную информацию. Понимает интересы и потребности других людей. Умеет считывать важную информацию, не высказанную прямо. ",
                "Умеет взаимодействовать с собеседниками любого уровня. Воспринимается как авторитетный, влиятельный собеседник. Своевременно вовлекает других людей в обсуждение своих предложений, заручается поддержкой. ",
                "Эффективен с ситуациях трудной коммуникации. Прогнозирует и учитывает реакции на свои высказывания. Умеет отстаивать свое мнение даже в крайне неблагоприятных ситуациях. Способен убедить враждебно настроенных оппонентов.",
                "Гибко меняет стиль общения в зависимости от аудитории и задачи. Легко находит общий язык и взаимопонимание с разными людьми."
            ],
        ],
        //Работа в команде
        [
            [
                "Не понимает или не хочет понимать общую цель команды и не прилагает усилия к ее достижению.",
                "Негативно настроен и не хочет работать на командный результат. Заинтересован исключительно в личных достижениях.",
                "Иногда провоцирует конфликты в команде.",
                "Не признает свою ответственность за командный результат.",
                "Никогда не делится идеями с командой.",
            ],
            [
                "Демонстрирует понимание общей цели и способов ее достижения. При возможности вносит посильный вклад.",
                "Готов учитывать интересы команды, если руководитель попросит об этом.",
                "Не вступает и не провоцирует конфликты.",
                "Не всегда готов брать на себя ответственность за командный результат.",
                "Редко делится идеями с командой."
            ],
            [
                "Демонстрирует понимание общей цели и прилагает достаточно усилий для ее достижения.  Готов идти на компромисс для достижения общих целей команды. ",
                "Соблюдает баланс между личными интересами и интересами команды. Выясняет и понимает точки зрения членов команды.",
                "Модерирует и снимает конфликты внутри команды.",
                "Проявляет готовность к разделению ответственности и вознаграждения за результат.",
                "Иногда делится идеями с командой.",
            ],
            [
                "Активно взаимодействуя с коллегами для достижения общих целей.  Придерживается принципа взаимной помощи.",
                "Вносит ощутимый вклад в работу команды. Вдохновляет всех членов команды вносить свой вклад в развитие и достижение целей.",
                "Создает атмосферу уважения, взаимовыручки и сотрудничества.",
                "Проявляет готовность к разделению ответственности и вознаграждения за результат.",
                "Открыто делится идеями и обеспечивает обратную связь всем участникам команды."
            ],
        ],
        // Клиентоориентированность
        [
            [
                "Не знает и/или не заинтересован в удовлетворении потребностей внутренних/внешних гостей.",
                "Передает заявки от внутренних/внешних гостей другим сотрудникам, даже когда может сам решить эти вопросы.",
                "Не отвечает на просьбы или заявки внутренних/внешних гостей. Поступившие к нему запросы не получают быстрого рассмотрения.",
                "Ко всем применяет один и тот же подход.",
                "Не заинтересован в процессе определения стандартов обслуживания внутренних/внешних гостей и контроле за ними.",
            ],
            [
                "Понимает потребности гостей, но нейтрален в их удовлетворении для внутренних/внешних гостей. При возможности закроет задачу, но не демонстрирует стремления помочь или сделать больше.",
                "Частично закрывает заявки самостоятельно. Не всегда знает, к кому обратится за помощью. Иногда просто передает задачу руководителю или опытному коллеге.",
                "Отвечает на заявки согласно стандартам компании. Редко что-то задерживает.",
                "Старается подходить индивидуально к каждому гостю, но порой действует шаблонно.",
                "Старается придерживаться стандартов компании, но не превосходит ожидания внутренних/внешних клиентов в своей работе.",
            ],
            [
                "Понимает потребности и нужды гостей, стремится удовлетворить их.",
                "Эффективно работает с запросами гостей и знает, к кому обратиться за помощью, если не может самостоятельно закрыть задачу.",
                "Отвечает на заявки согласно стандартам компании. Часто закрывает запросы быстрее прописанных стандартов.",
                "Внимателен и подходит индивидуально к каждому гостю и запросу.",
                "Вносит собственный вклад в развитие поддержание высоких стандартов обслуживания. Является ролевой моделью."
            ],
            [
                "Знает и понимает потребности и нужды гостей. Идентифицирует возможные варианты оказания помощи и предоставления услуги, выбирая из них самый лучший. Заинтересован в том, чтобы гость остался доволен.",
                "Может быстро и качественно закрыть любой сложный или нестандартный запрос.",
                "Вносит собственный вклад в развитие стандартов обслуживания в своем отделе и принимает активное участие в достижении этих стандартов. ",
                "Внимателен и подходит индивидуально к каждому гостю и запросу.",
                "Устанавливает высокий порог доверия, что видно по обратной связи. Превосходит ожидания внутренних/внешних гостей."
            ],
        ],
        // Честность и этическое поведение
        [
            [
                "Не соблюдает взятые на себя обязательства и обещания.",
                "Скрывает информацию, прячет проблемы под ковер. Может легко нарушить данное обещание, на такого сотрудника нельзя положиться. Стремится к удовлетворению исключительно своих интересов, не настроен на сотрудничество.",
                "Может вводить коллег в заблуждение, использовать ложь и интриги в своих интересах.",
                "Часто нарушает корпоративные нормы и правила.",
                "Безответственно относится к имуществу компании и ресурсам. Может использовать их вне рабочих задач.",
            ],
            [],
            [],
            [
                "Соблюдает взятые на себя обязательства и обещания.",
                "Во взаимодействии с коллегами соблюдает культуру открытости и доверия. Честен и стремится к сотрудничеству.",
                "Не вводит коллег в заблуждение, избегает лжи и интриг.",
                "Соблюдает корпоративные нормы и правила, демонстрирует высокую культуру делового поведения.",
                "Бережно и этично относится к имуществу и ресурсам компании."
            ],
        ]
    ];
}

export default new Table();


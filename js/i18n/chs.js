/** @type {typeof i18nDefault} */
i18nStrings.chs = {
    /** Name of the language, in that language. Don't translate the word "English" to your language. */
    name: "简体中文",
    /** The number notation to use as the default with the language. */
    notation: "common",
    /** The primary verb. See `verb` for more info. */
    primaryVerb: "draw",

    /** 
     * A list of verbs for the player to choose from. Each verb contains a list of forms
     * that are used to be inserted into strings. 
     * 
     * For example: In English, `"free {draws}"` can be replaced into "free draws", "free pulls",
     * or "free summons" based on the verb the player selected in Settings.
     * 
     * You can declare as much verb forms as your language needs.
     * 
     * `_anim` is used to determine per-verb special card opening animation. For example: `_anim: "spin"`
     * makes the card pack spin while it is opened and should be used on verbs that are near in meaning
     * to the word "spin".
     * 
     * `_equiv` declares a verb's equivalent verb in English and is used to determine which verb to change to
     * when the player changes the game's language.
     * 
     * @type {{[verb: string]: { _equiv?: string, _anim?: string, [form: string]: string }}} 
    */
    verbs: {
        draw: {
            draw: "抽卡",
            draws: "抽卡",
            drew: "抽卡",
            drawn: "抽卡",
            drawing: "抽卡",
        },
        pull: {
            draw: "pull",
            draws: "pulls",
            drew: "pulled",
            drawn: "pulled",
            drawing: "pulling",
        },
        summon: {
            draw: "召唤",
            draws: "召唤",
            drew: "召唤",
            drawn: "召唤",
            drawing: "召唤",
        },
        roll: {
            _anim: "spin",
            draw: "roll",
            draws: "rolls",
            drew: "rolled",
            drawn: "rolled",
            drawing: "rolling",
        },
        spin: {
            _anim: "转动",
            draw: "转动",
            draws: "转动",
            drew: "转动",
            drawn: "转动",
            drawing: "转动",
        },
        gacha: {
            draw: "gacha",
            draws: "gacha",
            drew: "gacha'd",
            drawn: "gacha'd",
            drawing: "gacha'ing",
        }
    },

    /** 
     * Common or uncategorized strings.
    */
    common: {
        title: "一万亿免费{Draws}",
        title_rich: "<span class='number'>一万亿</span> 免费 {Draws}",

        draw: "{Draw}",
        draw_inCooldown: "冷却中",
        switch: {
            no: "切换到 无 派系",
            fire: "切换到 火 派系",
            water: "切换到 水 派系",
            leaf: "切换到 叶 派系",
            sun: "切换到 日 派系",
            moon: "切换到 月 派系",
        },
        skills: {
            active: "活跃",
        },

        hint_title: "你得到了 {0} 免费 {draws}!",
        hint_desc: "点击下面这个大 “{Draw}” 按钮以开始 {drawing} 一些卡片!",
        hint_ios_title: "为了最好的体验:",
        hint_ios_desc: "按下 {0} -> “添加到主界面” -> 添加",
    },

    /** 
     * Strings for notification popups
    */
    notifs: {
        badge_earn: "获得的徽章:",
        music_needsInteract: "点击任意位置以启用背景音乐",
    },

    /** 
     * Strings related to formatting.
    */
    format: {
        joiner: {
            currency: "{0} {1}",
        },
        marks: {
            quote: "“{0}”",
        },
        skill: {
            cooldown: "冷却: {0}"
        },
        time: {
            second: "{0}秒",
            minute: "{0}分钟",
            hour: "{0}小时",
            day: "{0}天",
            joiner: "{1} {0}",
        },
        chance: {
            fraction: "{0} in {1}",
            percent: "{0}%"
        }
    },

    /** 
     * Strings related to tabs' contents.
    */
    tabs: {
        common: {
            strings: {
                nothing: "好像这里什么都没有...",
            }
        },
        collection: {
            name: "收藏",
            filters: {
                rarity: {
                    any: "容易稀有度",
                    n: "<rarity rarity='n'></rarity> 卡片", 
                    r: "<rarity rarity='r'></rarity> 卡片", 
                    sr: "<rarity rarity='sr'></rarity> 卡片", 
                    ssr: "<rarity rarity='ssr'></rarity> 卡片", 
                    ur: "<rarity rarity='ur'></rarity> 卡片",
                    ex: "<rarity rarity='ex'></rarity> 卡片",
                },
                faction: {
                    any: "任意 派系", 
                    none: "无 派系",
                    fire: "火 派系", 
                    water: "水 派系", 
                    leaf: "叶 派系", 
                    sun: "日 派系", 
                    moon: "月 派系",
                },
                pickit: {
                    off: "禁用精选溢价",
                    on: "显示可升级的卡片",
                },
            }
        },
        marketplace: {
            name: "市场",
            headers: {
                exCards: "<rarity rarity='ex'></rarity> 卡片",
            }
        },
        infobook: {
            name: "信息手册",
            subtabs: {
                stats: "统计",
                breakdown: "分解",
                gallery: "画廊",
            },
            strings: {
                badges: "徽章",
                story: "故事",
            }
        },
        options: {
            name: "选项",
            headers: {
                prefs: "首选项",
                saves: "存档管理",
                other: "其他"
            },
            items: {
                language: "语言",
                notation: "数值格式",
                verb: "动词",
                cardImages: "卡片图片",
                music: "背景音乐",
                localSave: "本地保存",
                cloudSave: "云存档",
                info: "信息",
                otherOther: "其他的其它",
            },
            values: {
                items: {
                    manualSave: "手动保存",
                    importExport: "导入/导出 存档",
                    hardReset: "硬重置",
                    checkSaves: "检查存档",
                    about: "关于 & 鸣谢", 
                    john: "johnvertisement",
                },
                common: {
                    hidden: "隐藏",
                    shown: "显示",
                    disabled: "已禁用",
                    enabled: "已启用",
                },
                notation: {
                    default: "默认 (跟随语言)",
                    common: "常用",
                    scientific: "科学",
                    engineering: "工程",
                    si: "SI 前缀",
                    alphabet: "字母",
                    chinese: "中文",
                    korean: "韩文",
                }
            },
            strings: {
                save_recent: "(游戏已保存)",
                save_timer: "(上次保存于 {0} 前)",

                cloud_type_galaxy: "(链接到 galaxy)",
                cloud_loggedOut: "(已登出)",
                cloud_state_saving: "(保存中...)",
                cloud_state_loading: "(加载中...)",
                cloud_state_checking: "(检查中...)",

                verb_desc: "更改 {drawing} 卡片时的动词, 在游戏标题和道具描述等地方.",
                john_note: "(注意：链接在这个选项卡中打开，按ctrl+点击以免不小心关闭游戏)",
            },
        },
    },

    /** 
     * Strings related to popups or tooltips' contents.
    */
    popups: {
        common: {
            title_error: "错误",

            desc_error: "出现错误: {0}",
            desc_pleaseWait: "请稍等.",

            action_close: "关闭",
            action_continue: "继续",
        },
        draw: {
            strings: {
                brand: "DTCGco.™",
                brand_full: "© DUDUCAT TRADING CARD GAME CO.",
                pack_title: "欧米伽卡片",
                pack_subtitle: "教师卡牌游戏",
                pack_count: "卡包包含 {0} 卡片",
            },
        },
        currency: {
            strings: {
                amount_have: "(你有 {0})",
                amount_drawn: "(你 {drawn} {0})",
                speed_minute: "({0}/分钟)",
                toCap: "({0} 直到封顶)",
                efficiency: "({0} 效率)",
            }
        },
        card: {
            factions: {
                fire: "(火 派系)", 
                water: "(水 派系)", 
                leaf: "(叶 派系)", 
                sun: "(日 派系)", 
                moon: "(月 派系)", 
            },
            strings: {
                copies: "({0} 额外副本)",
                stars: "({0} 星)",
                crown: "(王冠卡)",
                level: "(等级 {0})",
                notOwned: "(尚未拥有卡片)",

                level_title: "升级",
                level_cost: "升级成本:",
                level_cant: "此卡无法升级.",
                level_cant_max: "已满级.",
                level_cant_cost: "没有足够的 {0}.",
                level_prompt: "点击以升级.",
                level_button: "升级",
                level_button_cant: "无法升级",
                level_button_max: "已满级",

                star_title: "融合",
                star_cost: "融合成本:",
                star_cost_copies: "“{0}” 额外副本",
                star_cant: "This card can not be fused.",
                star_cant_max: "已满星.",
                star_cant_cost: "副本不足.",
                star_prompt: "点击融合.",
                star_button: "融合",
                star_button_cant: "无法融合",
                star_button_max: "已满星",
            }
        },
        skill: {
            strings: {
                skill: "(技能)",
                skill_locked: "该技能未解锁",

                action_activate: "激活",
                action_activated: "已激活",
                action_inCooldown: "冷却中 ({0})"
            }
        },
        badge: {
            strings: {
                state_obtained: "(获得的徽章)",
                state_locked: "(未解锁的徽章)",

                lock_desc: "???",
            }
        },
        slideshow: {
            strings: {
                action_skip: "我什么都没看",
                action_next: "下一个",
            }
        },
        save: {
            ie_title: "导入/导出 存档",
            ie_desc1: "下面的文本框包含您的保存数据。复制你的存档并保存在安全的地方。",
            ie_desc2: "或者，将你的保存粘贴在那里，然后按“从文本框导入”来加载保存。",
            ie_action_save_text: "复制到剪贴板",
            ie_action_save_file: "下载文件",
            ie_action_load_text: "从文本框导入",
            ie_action_load_file: "上传文件",

            saved_title: "游戏已保存",
            saved_desc: "现在可以安全关闭此选项卡了.",
            saved_noteLocal: "(注意：本游戏自上次保存一分钟后自动保存，并在某些事件，如平局后和设置更改时自动保存)",
            saved_noteCloud: "(注意：本游戏自上次云保存后5分钟后自动保存至云端)",
            saved_text_title: "复制存档",
            saved_text_desc: "存档数据已复制到剪贴板.",
            saved_file_title: "下载存档...",
            saved_file_desc: "存档数据将下载保存为 \"{0}\"...",

            import_error: "无效的存档",
            import_error_desc: "此保存似乎不正确或已损坏。确保复制了整个保存字符串，并且保存字符串没有被截断.",
            import_error_desc_ellipsis: "在保存字符串中检测到省略号。您的保存可能已被浏览器或操作系统截断。您可以使用“下载文件”选项来进行更可靠的备份.",

            import_confirm_title: "导入此存档?",
            import_confirm_desc: "是否导入此存档？您当前的游戏进度将被覆盖!",
            import_confirm_cloudcheck_title: "旧的云存档",
            import_confirm_cloudcheck_desc: "云上的保存似乎比当前的本地保存更老。您想要导入云存档吗?",
            import_confirm_cloudavail_title: "云存档可用!",
            import_confirm_cloudavail_desc: "有一个可用的云存档。您要导入它吗？",
            import_confirm_action_no: "不了，返回",
            import_confirm_action_yes: "是的，导入存档",

            reset_confirm_title: "你真的确定要硬重置?",
            reset_confirm_desc1: "此操作将 <strong>彻底清除游戏进度.</strong> 你将回到游戏的最开始且 <strong>得不到任何奖励.</strong>",
            reset_confirm_desc2: "游戏将复制当前保存的数据到你的剪贴板，以防你改变主意.",
            reset_confirm_action_no: "不了，返回",
            reset_confirm_action_yes: "是的，硬重置",

            busy_saving_cloud: "保存到云存储...",
            busy_import: "导入存档...",
            busy_reset: "硬重置...",
            busy_desc: "(游戏很快就会重新加载，在这个过程中不要关闭游戏)",

            error_cloudSaveCooldown: "Please wait 30 seconds between cloud saves.",
            error_cloudCheckCooldown: "Please wait 30 seconds between cloud save checks.",
            error_copy1: "There was an error trying to copy your save string into the clipboard.",
            error_copy2: "You can still manually copy your save string from the text box by selecting all the text and copy it.",
            error_loggedOut: "You are not logged in. Please log in in order to access cloud save functionalities.",

            opt_keepPrefs: "Keep preferences",
            opt_keepPrefs_noteReset: "(Note: preferences that are bound to an unlockable will be reset to default values)",
            opt_keepPrefs_noteImport: "(Note: preferences that are bound to an unlockable will be reset to default values if said unlockable is not present in the new save)",
        },
        about: {
            blabs: [
                "(because we can't help ourselves from inflating free {draw} counts)",
                "(because we can't help ourselves from advertising free {draw} counts)",
                "(no-download game with cutting-edge web technologies)",
                "(about as generous a gacha game could be)",
                "(and you thought a-thousand-ish was too much)",
                "<marquee>(look ma, i'm in a &lt;marquee&gt; tag!)</marquee>",
            ],
            strings: {
                game: "游戏作者 {0}",
                libs: "使用的库:",
                music: "音乐来自 {0}",
                music_foot: "(嘿，那是我)",
                icons: "来自各种来源的图标 {0}",
                footer: "(这款游戏是否可以算作是模仿游戏，并因此获得合理使用的资格?<br>我不知道，我不是律师)"
            }
        },
        complete: {
            strings: {
                title: "游戏已完成!",
                line1: "你已经成功地用完了你所有的一万亿免费{draws}!",
                line2: "实现它只花了你 {0}.",
                line3: "这是现在的结束，你可以等待更新，或者你可以进入 设置 -> 硬重置 可以再次玩游戏.",
            }
        },
    },

    /** 
     * Strings related to currencies, such as their names or quote texts.
    */
    currencies: {
        cards: {
            name: "卡片",
            left: "剩余卡片",
            quote: "为全能欧米茄卡游戏制作，这些卡实际上是代金券，让你花更多的钱去 {draw} 更多卡片... 在你用完你的一万亿免费卡片 {draws} 之后, 至少。他们太乐意给人们发放数万亿的免费卡片 {draws}, 事实上，每个人都是",
        },
        energy: {
            name: "能量体积",
            quote: "用作欧米伽卡牌的忠诚计划货币，允许你一次性交易多张卡片 {draws}",
        },
        points: {
            name: "点数",
            quote: "世界上最通用的货币。它足够通用，可以分配给任何可以想象的用例",
        },
        shreds: {
            name: "碎片",
            quote: "多余卡片的残留物，被分解成原子。这些卡片几乎没有交易价值 (除了少数 <rarity rarity='ex'></rarity> 卡片), 因此，人们发明了使用它们的新方法，例如将它们粉碎，用作新的升级货币",
        },
        fire: {
            name: "火之力",
            quote: "来自火派系的力量。有人认为这是人类最伟大的成就",
        },
        water: {
            name: "水之力",
            quote: "来自水派系的力量。总是提醒你要多喝水",
        },
        leaf: {
            name: "叶之力",
            quote: "来自叶派系的力量。你觉得自己与自然融为一体",
        },
        sun: {
            name: "日之力",
            quote: "来自日派系的力量。也被认为有控制空气的能力",
        },
        moon: {
            name: "月之力",
            quote: "来自月派系的力量。也被认为有控制大地的力量",
        },
    },

    /** 
     * Strings related to cards, such as their names or quote texts.
    */
    cards: {
        standard: {
            n: {
                n0: {
                    name: "虚无方块",
                    desc: "无效果.",
                    quote: "这个方块被设定为99%的几率被选中"
                },
                n1: {
                    name: "单点",
                    desc: "获得 {+0} 点数每次 {draw}.",
                    quote: "ここにいる"
                },
                n2: {
                    name: "半点",
                    desc: "随机获得 0 到 {+0} 点数每次 {draw}.",
                    quote: "为了解释半点到底是什么，我们需要谈谈平行宇宙-"
                },
                n3: {
                    name: "卡包",
                    desc: "{+0} 基础体积. 基础体积增加你一次性 {draws} 卡片的数量",
                    quote: "好吧，如果你想用完所有的一万亿卡片 {draws} 你需要开始一次性 {drawing} 很多张卡片，你知道吗?"
                },
                n4: {
                    name: "自动填充卡包",
                    desc: "{+0} 大功率. 大功率力量被动地产生大功率能量.",
                    quote: "增量游戏，又称放置游戏"
                },
                n5: {
                    name: "更大的卡包",
                    desc: "{+0} 能量体积上限. 超过能量上限的大功率能量生产速度会减慢.",
                    quote: "这次你真的可以闲下来了"
                },
                n6: {
                    name: "剪刀",
                    desc: "{+0%} 拆卡包速度.",
                    quote: "如果你还没有注意到它，你可以在它破裂的时候点击它，以便更快地破坏它"
                },
                n7: {
                    name: "快速交付",
                    desc: "{+0%} 冷却速度.",
                    quote: "用我们新的快速送货服务更快地补充库存 - 适用于所有1卡及以上的订单!",
                },
                c1: {
                    name: "游戏内商店",
                    desc: "解锁市场.",
                    quote: "找到无法通过 {drawing} 获得的卡片, 可能会花光你所有的钱，试图出价超过出价最高的人"
                }
            },
            r: {
                n0: {
                    name: "史诗碎纸机",
                    desc: "{+0%} 分解乘数.",
                    quote: "与其使用办公室制造的小型碎纸机，为什么不使用互联网上为ASMR视频制作的巨型碎纸机呢?"
                },
                n0b: {
                    name: "神奇的分解时刻",
                    desc: "{+0%} 分解乘数.",
                    quote: "显然，互联网上的人们喜欢看东西被撕成碎片！你发现你可以把你的史诗碎纸机撕碎卡片的过程录下来，然后上传到PipeTube上，在这个过程中赚取一些丰厚的广告收入"
                },
                n1: {
                    name: "点数乘数",
                    desc: "{+0%} 点数乘数.",
                    quote: "每一款增量游戏都需要指数级增长，一种通用货币需要一种通用的乘数升级"
                },
                n1b: {
                    name: "金钱印刷机",
                    desc: "{+0%} 点数乘数.",
                    quote: "把你的一些碎片压成钞票。这也是合法货币的制造方式，人们甚至不会注意到区别"
                },
                n2: {
                    name: "更大的卡包",
                    desc: "{+0%} 基础体积, 但是 {+1%} 冷却时长.",
                    quote: "体积越大越好"
                },
                n3: {
                    name: "开卡器工厂",
                    desc: "{+0%} 大功率, 但是 {+1%} 冷却时长.",
                    quote: "生产大量的开卡器"
                },
                n3b: {
                    name: "回收",
                    desc: "{+0%} 大功率",
                    quote: "重复使用卡片来打开更多的卡片实际上是一个好主意"
                },
                n3c: {
                    name: "堆肥机",
                    desc: "{+0%} 能量体积上限.",
                    quote: "使用这个设计用来制作一吨卡片的堆肥机，回收更加困难"
                },
                n4: {
                    name: "耐力训练",
                    desc: "{+0%} 卡片乘数, 但是 {+1%} 冷却时间和拆卡包时间.",
                    quote: "卡包得到了一些耐力训练！现在更难进入了，但是里面的东西增加了！"
                },
                n5a: {
                    name: "趋势",
                    desc: "{+0} 每次获得的火之力.",
                    quote: "啊,<br>好热啊,<br>..., 好热啊"
                },
                n5b: {
                    name: "海洋",
                    desc: "{+0} 每次获得的水之力.",
                    quote: "我是蓝色的，直到死去"
                },
                n5c: {
                    name: "森林",
                    desc: "{+0} 每次获得的叶之力.",
                    quote: "团队树 ftw"
                },
                n5d: {
                    name: "空气",
                    desc: "{+0} 每次获得的日之力.",
                    quote: "感受呼吸"
                },
                n5e: {
                    name: "大地",
                    desc: "{+0} 每次获得的月之力.",
                    quote: "它是我们的家园"
                },
                c1: {
                    name: "系统 2",
                    desc: "解锁 信息手册。查看你的数据和其他东西，尽管有一个价格...",
                    quote: "嗯，当然 🤓"
                }
            },
            sr: {
                n0: {
                    name: "完美通用卡",
                    desc: "{+0%} 点数乘数.",
                    quote: "A perfectly generic card that boosts the perfectly generic currency, the genericness is getting too perfect to handle"
                },
                n1: {
                    name: "一对点数",
                    desc: "Raise the level in <b><rarity rarity='n'></rarity> A Single Point</b>'s effect by {^0:1}",
                    quote: "This is called a line"
                },
                n2: {
                    name: "骰子提取器",
                    desc: "Raise the level in <b><rarity rarity='n'></rarity> Half a Point</b>'s effect by {^0:1}",
                    quote: "Let the pips on the die guide you"
                },
                n3: {
                    name: "卡片仓库",
                    desc: "{+0%} bulk energy cap.",
                    quote: "At this rate you will need to get yourself a bigger room just so you can store all your cards"
                },
                n4a: {
                    name: "火之力精通",
                    desc: "{+0%} fire power, leaf power, and point gains.",
                    quote: "Yes, these <rarity rarity='sr'></rarity> cards really are just copy and paste, you don't think every gacha game does this all the time?"
                },
                n4b: {
                    name: "水之力精通",
                    desc: "{+0%} water power, fire power, and point gains.",
                    quote: "Yes, these <rarity rarity='sr'></rarity> cards really are just copy and paste, you don't think every gacha game does this all the time?"
                },
                n4c: {
                    name: "叶之力精通",
                    desc: "{+0%} leaf power, water power, and point gains.",
                    quote: "Yes, these <rarity rarity='sr'></rarity> cards really are just copy and paste, you don't think every gacha game does this all the time?"
                },
                n4d: {
                    name: "日之力精通",
                    desc: "{+0%} sun power, moon power, and point gains.",
                    quote: "Yes, these <rarity rarity='sr'></rarity> cards really are just copy and paste, you don't think every gacha game does this all the time?"
                },
                n4e: {
                    name: "月之力精通",
                    desc: "{+0%} moon power, sun power, and point gains.",
                    quote: "Yes, these <rarity rarity='sr'></rarity> cards really are just copy and paste, you don't think every gacha game does this all the time?"
                },
                n5a: {
                    name: "Rapid Fire",
                    desc: "{/0:2} <b>Burst</b> cooldown.",
                    quote: "Needs more dakka"
                },
                n5b: {
                    name: "深度冻结",
                    desc: "{/0:2} <b>Freeze Drop</b> cooldown.",
                    quote: "Near-absolute zero"
                },
                n5c: {
                    name: "NPK",
                    desc: "{/0:2} <b>Fertilizer</b> cooldown.",
                    quote: "Why do one when you can do all of them?"
                },
                n5d: {
                    name: "夏天",
                    desc: "{/0:2} <b>Photosynthesis</b> cooldown.",
                    quote: "Beach episode not included"
                },
                n5e: {
                    name: "大学",
                    desc: "{/0:2} <b>简化</b> 冷却.",
                    quote: "教导学生批判性思维"
                },
                c1: {
                    name: "强迫症",
                    desc: "解锁按一定条件筛选卡片的功能.",
                    quote: "必须... 保持它... 有条理..."
                }
            },
            ssr: {
                n0: {
                    name: "最后冲刺",
                    desc: "{+0%} 卡片乘数.",
                    quote: "感谢你在游戏中走到这一步！如果你喜欢它，一定要留下喜欢并订阅更多类似的内容"
                },
                n0b: {
                    name: "废料",
                    desc: "{x0} 分解增益来自 <rarity rarity='r'></rarity> 及以上卡片.",
                    quote: "呱呱"
                },
                n0c: {
                    name: "黄铁矿",
                    desc: "{x0} 增益来自 <rarity rarity='sr'></rarity> 及以上卡片.",
                    quote: "尽管它是“愚人的黄金”，但它仍然可以作为一种成分对于 <rarity rarity='sr'></rarity> 卡片"
                },
                n0d: {
                    name: "钻石",
                    desc: "{x0} 增益来自 <rarity rarity='ssr'></rarity> 及以上卡片.",
                    quote: "钻石实际上很常见，因为已经发现了如何从煤中聚变钻石，但是设备太贵了，它们可能被认为是富人的玩具"
                },
                n1a: {
                    name: "星系",
                    desc: "根据你收藏的卡片的星星总数获得更多点数 (王冠卡片每一张算作 {0} 星).<br>(当前: {1} 星 ⇒ {+2%} 点数增益)",
                    quote: "在一个星系, 很远很远的地方..."
                },
                n1b: {
                    name: "皇家垃圾",
                    desc: "根据你收藏的王冠卡片的总数获得更多的碎片.<br>(当前: {0} 王冠卡片 ⇒ {+1%} 分解增益)",
                    quote: "比普通的垃圾更值钱"
                },
                n1b2: {
                    name: "相簿",
                    desc: "根据你获得的徽章数量获得更多碎片.<br>(当前: {0} 徽章 ⇒ {+1%} 分解增益)",
                    quote: "啊，回忆"
                },
                n1c: {
                    name: "额外点数",
                    desc: "获得更多的点数，基于你的收藏中 <rarity rarity='ex'></rarity> 卡片的总数量.<br>(当前: {0} <rarity rarity='ex'></rarity> 卡片 ⇒ {+1%} 点数增益)",
                    quote: "点数再多也无妨，对吧？"
                },
                n1d: {
                    name: "未来计算器",
                    desc: "根据你解锁的统计条目的总数，获得更多的点数.<br>(当前: {0} 条目 ⇒ {+1%} 点数增益)",
                    quote: "1 ^ 2 + 3 = 4"
                },
                n1e: {
                    name: "奇怪的棋盘地板质疑现实",
                    desc: "根据你完成的技能反应总数获得更多碎片.<br>(当前: {0} 反应 ⇒ {+1%} 分解增益)",
                    quote: "所有的科技进步，就为了这个"
                },
                s_fire: {
                    name: "爆炸",
                    desc: "解锁 <b>爆炸</b> 技能.",
                    quote: "谁又在地牢里使用爆炸魔法了!?"
                },
                s_fire_1: {
                    name: "特大爆炸",
                    desc: "<b>爆炸</b> 技能每次触发跳过一个额外的 {+0s}.",
                    quote: "现在有了出色的表现"
                },
                s_fire_2: {
                    name: "爆炸精通",
                    desc: "<b>爆炸</b> 技能获得一个额外 {+0s} 时间跳过在每次触发时，当每次你使用这个技能时.<br>(当前: {1} 时间 ⇒ {+2s} 时间跳过)",
                    quote: "*粒子加速器的声音*"
                },
                s_water: {
                    name: "冻结掉落",
                    desc: "解锁 <b>冻结掉落</b> 技能.",
                    quote: "你想堆一个雪人吗?"
                },
                s_water_1: {
                    name: "缓慢但稳定",
                    desc: "{+0%} 卡片乘数当 <b>冻结掉落</b> 激活时.",
                    quote: "最好慢慢来确定"
                },
                s_water_2: {
                    name: "山顶",
                    desc: "{+0%} <b>冻结掉落</b> 的能量上限提升, 但是 {+1%} 卡牌乘数，当能量达到上限时 <b>冻结掉落</b> 是激活的.",
                    quote: "🍓"
                },
                s_leaf: {
                    name: "肥料",
                    desc: "解锁 <b>Fertilizer</b> 技能.",
                    quote: "树木越快，纸就越快，分解就越快"
                },
                s_leaf_1: {
                    name: "培养",
                    desc: "提高 <b>肥料</b> 的乘数效果 {x0:1}.",
                    quote: "爱护树木"
                },
                s_sun: {
                    name: "光合作用",
                    desc: "解锁 <b>光合作用</b> 技能.",
                    quote: "太阳是不那么致命的激光"
                },
                s_sun_1: {
                    name: "额外照明",
                    desc: "提高 <b>光合作用</b> 的增益和减益效果 {+0%}.",
                    quote: "这是一个闪光弹吗?"
                },
                s_moon: {
                    name: "简化",
                    desc: "解锁 <b>简化</b> 技能.",
                    quote: "不能持有所有这些货币吗"
                },
                s_moon_1: {
                    name: "抽象",
                    desc: "提高 <b>简化</b> 的增益 {+0%} 以及它的减益 {+1%}.",
                    quote: "This card has been abstracted so much that I can't even bother to write a proper flavor text for it"
                },
                s_moon_2: {
                    name: "抽象^2",
                    desc: "Raise the effective level in <rarity rarity='ssr'></rarity><b> Abstractify</b>'s buff effect by {^0:1}.",
                    quote: "Yeah, and this one either"
                }
            },
            ur: {
                n0: {
                    name: "妈妈",
                    desc: "{+0%} base bulk, bulk power, energy cap, and card multiplier.<br>{+1%} shred gain.<br>{x2} point gain.",
                    quote: "<rarity rarity='ur'></rarity> mom's so buffed she's the strongest unit in the game"
                },
                n1a: {
                    name: "多重火力",
                    desc: "Allow stacking of <b>Burst</b> skills, up to {0} uses at once.",
                    quote: "Over 9000 revolutions per second"
                },
                n1b: {
                    name: "睡眠游戏",
                    desc: "While <b>Freeze Drop</b> is active, increase bulk power by {+0%}, but decrease time skip amount of <b>Burst</b> by the same amount.",
                    quote: "Wait, that isn't what the initials mean?"
                },
                n1c1: {
                    name: "采种",
                    desc: "<b>Fertilizer</b> also multiply shred gains from crowned cards by {+0%}.",
                    quote: "Cherry-picking but with seeds. Let the best seed wins!"
                },
                n1c2: {
                    name: "电解质",
                    desc: "<b>Fertilizer</b> also multiply base shred gains by {+0%}.",
                    quote: "It's got what plants crave"
                },
                n1d: {
                    name: "粘性卡片",
                    desc: "Factioned cards {drawn} while <b>Photosynthesis</b> is active have a {0%} chance to duplicate oneself.",
                    quote: "It's actually two cards stuck into one, why are there so many of them here?"
                },
                n1e: {
                    name: "合作",
                    desc: "<b>Simplification</b>'s base buff effect gains {^0:1} of <rarity rarity=n></rarity> <b>Card Pack</b>'s effect.<br>(Currently: {+1})",
                    quote: "Oh my god is that a synergism reference?????"
                }
            },
            ex: {
                zip: {
                    name: "堆叠压缩",
                    desc: "Group together duplicate cards in the {draw} view, though the compression halves your card revealing speed in the process. Also remove the <span class='number'>100</span> bulk {draw} limit.",
                    quote: "Please note that StackRAR is not a free card. After a 40 day trial period you must either buy a license or burn this card off of your collection"
                },
                shred: {
                    name: "碎纸机",
                    desc: "Duplicate cards that are useless are shredded into a new currency called Shreds, including crowned cards and cards with max stars.",
                    quote: "Act as if nothing has ever happened"
                },
                faction: {
                    name: "过度使用派系系统",
                    desc: "Unlock Factions. Use factioned {draws} to get factioned currencies and faction-specific cards. (Factioned currency has a rare chance to appear.)",
                    quote: "Long ago, the five factions lived together in harmony. Then, everything changed when the fire faction attacked."
                },
                pickit: {
                    name: "精选溢价",
                    desc: "解锁过滤可升级卡牌的能力，尽管时间有限.",
                    quote: "你可以直接去看你想看的。没有什么能阻挡你。精选溢价 将扩大和加深你的卡片浏览热情."
                },
                skills: {
                    name: "组合",
                    desc: "解锁主动技能. (个人技能解锁可以通过派系 {drawing}.)",
                    quote: "↑↑↓↓←→←→BA"
                },
                skills2: {
                    name: "无需咒语的魔法卡包",
                    desc: "解锁减少技能冷却时间的卡片.",
                    quote: "你知道吗，你越早学会不需要咒语的魔法就越容易做到?"
                }
            }
        }
    },

    /** 
     * Strings related to skill, such as their names or descriptions.
    */
    skills: {
        fire: {
            name: "Burst",
            desc: "Instantly gain {0} worth of bulk energy.",
        },
        water: {
            name: "Freeze Drop",
            desc: "Increase the bulk energy cap by {0} until the next {draw}, but increase its cooldown by {1}.",
        },
        leaf: {
            name: "Fertilizer",
            desc: "Increase all shred multiplier per rarity increase by {0} for the next {draw}.",
        },
        sun: {
            name: "Photosynthesis",
            desc: "Increase faction power gain by {0} for the next {draw}, but decrease point and shred gain by {1}."
        },
        moon: {
            name: "Simplification",
            desc: "Increase point gain by {0} for the next {draw}, but decrease faction power gain by {1}."
        },
    },
    
    /** 
     * Strings related to stat entries.
    */
    stats: {
        general: {
            name: "概况", 
            items: {
                timePlayed: {
                    name: "游戏时长",
                },
            }
        },    
        cards: {
            name: "卡片",
            items: {
                cardsDrawn: {
                    name: "Cards {drawn}",
                },
                bulkDraw: {
                    name: "Base bulk",
                },
                bulkPower: {
                    name: "Bulk power",
                },
                bulkMult: {
                    name: "Card multiplier",
                },
                cardRChance: {
                    name: "<rarity rarity='r'></rarity> appear chance",
                },
                cardSRChance: {
                    name: "<rarity rarity='sr'></rarity> appear chance",
                },
                cardSSRChance: {
                    name: "<rarity rarity='ssr'></rarity> appear chance",
                },
                cardURChance: {
                    name: "<rarity rarity='ur'></rarity> appear chance",
                },
            }
        },
        points: {
            name: "点数",
            items: {
                base: {
                    name: "Base gain",
                },
                extra: {
                    name: "Random gain",
                },
                mult: {
                    name: "Multiplier",
                },
                calc: {
                    name: "Gain on {draw}",
                },
            }
        },
        shreds: {
            name: "碎片",
            items: {
                base: {
                    name: "基础增益",
                },
                crownMult: {
                    name: "王冠卡片乘数",
                },
                rMult: {
                    name: "<rarity rarity='r'></rarity>+ 卡片乘数",
                },
                srMult: {
                    name: "<rarity rarity='sr'></rarity>+ 卡片乘数",
                },
                ssrMult: {
                    name: "<rarity rarity='ssr'></rarity>+ 卡片乘数",
                },
                urMult: {
                    name: "<rarity rarity='ur'></rarity>+ 卡片乘数",
                },
            }
        },
        faction: {
            name: "派系",
            items: {
                chance: {
                    name: "力量几率",
                },
                fire: {
                    name: "火之力增益",
                },
                water: {
                    name: "水之力增益",
                },
                leaf: {
                    name: "叶之力增益",
                },
                sun: {
                    name: "日之力增益",
                },
                moon: {
                    name: "月之力增益",
                },
                mult: {
                    name: "全部力量乘数",
                },
                calc: {
                    name: "{draw} 增益",
                },
            }
        },
        skills: {
            name: "技能",
            items: {
                fireUse: {
                    name: "\"爆炸\" 使用次数",
                },
                waterUse: {
                    name: "\"冻结掉落\" 使用次数",
                },
                leafUse: {
                    name: "\"肥料\" 使用次数",
                },
                sunUse: {
                    name: "\"光合作用\" 使用次数",
                },
                moonUse: {
                    name: "\"简化\" 使用次数",
                },
                reaction: {
                    name: "技能反应",
                },
            }
        }
    },

    /** 
     * Strings related to badges, such as their names or descriptions.
    */
    badges: {
        11: {
            name: "Another Gacha Game to the Pile",
            desc: "{Draw} cards for the first time.",
        },
        12: {
            name: "Four-Leaf Clover",
            desc: "Obtain an <rarity rarity='r'></rarity> card.",
        },
        13: {
            name: "Luck or Dedication?",
            desc: "Obtain an <rarity rarity='sr'></rarity> card.",
        },
        14: {
            name: "Plz plz plz Legendary",
            desc: "Obtain an <rarity rarity='ssr'></rarity> card.",
        },
        15: {
            name: "Ultra Rare or Uber Rare?",
            desc: "Obtain an <rarity rarity='ur'></rarity> card.",
        },
        21: {
            name: "Finally I can see what I'm doing!",
            desc: "View your badges in-game.",
        },
        22: {
            name: "Polar Opposites",
            desc: "Create a skill reaction.",
        },
        23: {
            name: "Just throw it away",
            desc: "Make a no faction {draw} with Photosynthesis active.",
        },
        24: {
            name: "Safe and Sound",
            desc: "Manually save your game data to the cloud, or export your save.",
        },
        31: {
            name: "Would you like to buy more {draws}?",
            desc: "Use all of your one trillion free {draws}.",
        },
    },

    /** 
     * Strings to use in slideshows.
     * 
     * The `directive` list in each slideshow entries are used to control the slideshow's image and texts.
     * - `["image", x]` sets the banner image to that found in `/res/slideshow/{show id}/{x}.png/, or a
     * placeholder image if the destination image is not found.
     * - `["text", x]` plays a scrolling text at the bottom of the banner image.
     * 
     * You may add or remove text entries if if makes the translation better, 
     * but the order of image entries should stay the same.
    */
    slideshows: {
        1: {
            name: "Intro",
            directives: [
                ["image", "1"],
                ["text", "The year is 2078."],
                ["image", "2"],
                ["text", "Gacha gaming has become a way of life."],
                ["text", "The thrilling experience of not knowing what items you'll get, the satisfying feeling when you get a rare {draw}, the flexibility and easiness to add gacha mechanics to every game in existence..."],
                ["text", "People have found gacha games to be the best way to pass time, for casual players and the more competitive-minded players alike."],
                ["text", "Though, when people talk about gacha games, that's not the most significant point to keep in mind."],
                ["text", "It's the fact that..."],
                ["image", "3"],
                ["text", "They make a <i>lot</i> of money."],
                ["text", "The gacha gaming scene has grown into a multi-millillion-dollar worth industry, far greater than any entertainment scene's worth, combined."],
                ["text", "To chase the money, billions of gacha games are coming out every single blink of an eye."],
                ["text", "Of course, since the market has become diluted with so many games, they need a way to introduce itself to players and prove that they're worth their time."],
                ["image", "4"],
                ["text", "Enter the advertising scene."],
                ["text", "Companies initially advertised their games by showing them good graphics and great gameplay mechanics."],
                ["text", "But, that didn't seem to attract lots of players."],
                ["text", "Eventually, they discovered that the most effective way to market a game is... to just give them lots of free stuff."],
                ["text", "After all, virtual currencies and {draws} are in fact, virtual and can be given as much as the company wants."],
                ["text", "As players get used to the larger numbers though, as soon as companies know it, players kept asking for more."],
                ["text", "Companies can't afford to not give more, there will always be a game that decides to give more stuff and thus get more players and money."],
                ["text", "In order to keep up with this, games kept giving more and more free stuff, until the numbers are so inflated they no longer has any real life meaning."],
                ["image", "5"],
                ["text", "You, a person in this society, lying in bed, are about to pick up a new gacha game."],
                ["image", "6"],
                ["text", "Omega Cards, for the mobile devices, the first game of its kind to advertise a trillion free card {draws}. The number that's one followed by twelve zeroes."],
                ["text", "To people 50 years ago, that sounded like a crazy amount of free {draws} to give, but the scene has caught up so fast that it's now just a lesser number compared to other games."],
                ["text", "Though, you still see people on the internet come back to it from time to time for the nostalgia values."],
                ["image", "5"],
                ["text", "You found it interesting enough to start the game for the first time, though the game wants you to use up your one trillion {draws} first."],
                ["text", "And that's when you realize..."],
                ["image", "7"],
                ["text", "...you will definitely be here for a while."],
            ]
        }
    },
}
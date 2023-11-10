Search.setIndex({"docnames": ["09-workshop-pypsa", "10-workshop-pypsa-cem", "11-workshop-groupwork", "12-workshop-pypsa-sector-coupling", "13-workshop-interactive-visualisation", "intro"], "filenames": ["09-workshop-pypsa.ipynb", "10-workshop-pypsa-cem.ipynb", "11-workshop-groupwork.ipynb", "12-workshop-pypsa-sector-coupling.ipynb", "13-workshop-interactive-visualisation.ipynb", "intro.md"], "titles": ["Introduction to <code class=\"docutils literal notranslate\"><span class=\"pre\">pypsa</span></code>", "Capacity Expansion Planning with <code class=\"docutils literal notranslate\"><span class=\"pre\">pypsa</span></code>", "Preparation for Group Assignment", "Sector-Coupling with <code class=\"docutils literal notranslate\"><span class=\"pre\">pypsa</span></code>", "Interactive Visualisation and Dashboards", "Welcome"], "terms": {"stand": 0, "python": [0, 1, 2, 3, 4], "power": [0, 1, 2, 4], "system": [0, 1, 2, 3, 4, 5], "analysi": 0, "an": [0, 1, 2, 3, 4, 5], "open": [0, 1, 2, 4, 5], "sourc": [0, 1, 2, 3], "packag": [0, 1, 2, 3, 4], "simul": 0, "modern": 0, "energi": [0, 1, 3, 5], "includ": [0, 1, 2, 3, 5], "featur": [0, 2, 4], "convent": 0, "gener": [0, 1, 3, 4], "unit": [0, 2], "commit": 0, "ramp": 0, "up": [0, 1, 2, 3, 4], "down": 0, "start": [0, 1, 2, 4, 5], "shut": 0, "time": [0, 2, 3, 4], "vari": [0, 1, 3], "wind": [0, 1, 3, 4], "solar": [0, 1, 3, 4], "storag": [0, 3], "effici": [0, 1, 3], "loss": 0, "inflow": 0, "spillag": 0, "hydroelectr": 0, "coupl": [0, 2], "other": [0, 1, 2, 3, 4], "sector": 0, "transport": [0, 3], "heat": 0, "industri": 0, "convers": 0, "between": [0, 2, 4], "carrier": [0, 1, 3, 4], "e": [0, 1, 2, 3, 4], "g": [0, 1, 2, 3, 4], "hydrogen": [0, 1], "transmiss": [0, 1], "ac": 0, "dc": 0, "fuel": [0, 1, 3], "can": [0, 1, 2, 3, 4, 5], "us": [0, 1, 2, 3, 4], "varieti": 0, "problem": [0, 1, 2, 3, 4], "type": [0, 1], "model": [0, 4], "long": [0, 1], "term": [0, 1, 4], "invest": [0, 1, 3], "plan": 0, "expans": 0, "design": 0, "scale": 0, "well": [0, 3], "larg": 0, "seri": [0, 2, 3, 4], "compar": [0, 1, 4], "hand": 0, "pyomo": [0, 5], "doe": [0, 1, 2, 3, 4], "follow": [0, 1, 2, 3, 4], "thing": [0, 1, 3, 4], "you": [0, 1, 2, 3, 4, 5], "manag": [0, 3], "input": [0, 3], "commun": 0, "solver": [0, 1, 2, 3, 4], "retriev": [0, 2, 4], "process": [0, 1, 2], "result": [0, 4], "output": [0, 1, 3], "panda": [0, 1, 2, 3, 4, 5], "store": [0, 1, 2, 3, 4], "about": [0, 1, 3], "compon": [0, 3], "numpi": [0, 2, 3, 5], "scipi": 0, "linear": 0, "algebra": 0, "spars": 0, "matrix": 0, "calcul": [0, 1, 2, 3], "matplotlib": [0, 1, 2, 3, 5], "cartopi": [0, 5], "map": [0, 1, 2, 4], "networkx": [0, 5], "linopi": [0, 1, 3, 4], "handl": [0, 3], "document": [0, 1, 2, 3, 4], "thi": [0, 1, 2, 3, 4, 5], "avail": [0, 1, 3, 4, 5], "http": [0, 1, 2, 3, 4, 5], "readthedoc": [0, 1, 3, 4], "io": [0, 1, 3, 4, 5], "If": [0, 1, 2, 3, 4], "have": [0, 1, 2, 3, 4], "yet": [0, 1, 2, 3, 4], "set": [0, 1, 2, 3, 4], "your": [0, 1, 2, 3, 4], "comput": [0, 1, 3, 4], "execut": [0, 1, 3, 4], "tutori": [0, 1, 2, 3, 4, 5], "browser": [0, 1, 3, 4], "via": [0, 1, 3, 4], "googl": [0, 1, 3, 4, 5], "colab": [0, 1, 3, 4, 5], "click": [0, 1, 3, 4], "rocket": [0, 1, 3, 4], "top": [0, 1, 3, 4], "right": [0, 1, 3, 4], "corner": [0, 1, 3, 4], "launch": [0, 1, 3, 4], "doesn": [0, 1, 3, 4], "t": [0, 1, 2, 3, 4], "work": [0, 1, 2, 3, 4], "download": [0, 1, 3, 4], "ipynb": [0, 1, 3, 4], "file": [0, 1, 2, 3, 4], "Then": [0, 1, 2, 3, 4], "instal": [0, 1, 2, 3, 4], "command": [0, 1, 2, 3, 4], "jupyt": [0, 1, 3, 4, 5], "cell": [0, 1, 2, 3, 4], "notebook": [0, 1, 3, 4, 5], "pip": [0, 1, 2, 3, 4], "highspi": [0, 1, 3, 4], "xarrai": [0, 2, 4], "2023": [0, 1, 4], "9": [0, 1, 3, 4], "0": [0, 1, 2, 3, 4], "descript": [0, 1], "contain": [0, 1, 2, 4], "all": [0, 1, 2, 4], "bu": [0, 1, 3], "node": [0, 3], "where": [0, 1, 3, 4], "attach": [0, 3], "technolog": [0, 3, 4], "ga": [0, 1, 3], "coal": [0, 4], "oil": 0, "biomass": 0, "offshor": [0, 1], "track": 0, "properti": 0, "specif": 0, "carbon": 0, "dioxid": 0, "nice": [0, 4], "name": [0, 1, 2, 3], "color": [0, 1, 2, 3, 4], "load": [0, 2, 3], "consum": [0, 1], "demand": [0, 1, 2, 4], "plant": [0, 1, 3, 4], "turbin": [0, 1], "pv": 0, "panel": [0, 2, 4], "line": [0, 1, 2, 4], "distribut": [0, 1], "overhead": 0, "cabl": 0, "link": [0, 3], "connect": [0, 1, 3], "two": [0, 2, 4], "buse": [0, 3, 4], "control": 0, "flow": 0, "direct": 0, "thei": [0, 1, 2, 3], "hvdc": 0, "hvac": 0, "neglect": 0, "kvl": [0, 1], "onli": [0, 1, 2, 3, 4, 5], "net": [0, 3], "transfer": 0, "capac": [0, 4], "ntc": 0, "electrolysi": [0, 1, 3], "differ": [0, 1, 2, 4], "storageunit": [0, 1, 3, 4], "fix": [0, 1, 3], "nomin": 0, "ratio": [0, 1, 3], "globalconstraint": [0, 1, 3], "affect": 0, "mani": [0, 1, 4], "onc": [0, 3, 4], "separ": [0, 3], "extend": 0, "cours": [0, 1, 4, 5], "linetyp": 0, "standard": [0, 2], "transform": [0, 1, 2, 5], "2": [0, 1, 2, 3, 4], "transformertyp": 0, "shuntimped": 0, "shunt": 0, "tabl": 0, "lead": [0, 1], "each": [0, 3, 4], "per": [0, 1, 2], "valu": [0, 1, 4], "voltag": 0, "imped": 0, "ar": [0, 1, 2, 3, 4], "intern": [0, 4], "It": [0, 1, 2, 3], "assum": [0, 1, 3], "base": [0, 1, 3, 4], "1": [0, 1, 2, 3, 4], "mw": [0, 1, 2, 3], "The": [0, 1, 2, 3, 4], "principl": 0, "associ": 0, "variabl": [0, 1, 2, 3, 4], "ad": 0, "For": [0, 1, 2, 3, 4], "hourli": [0, 1, 3], "solv": [0, 1, 2, 3, 4], "look": [0, 1, 3, 4], "like": [0, 1, 2, 4, 5], "begin": [0, 1, 3], "equat": [0, 1], "min_": [0, 1], "g_": [0, 1], "i": [0, 1, 3, 4], "s": [0, 1, 2, 3, 4], "f_": [0, 1], "ell": [0, 1], "r": [0, 1, 4], "text": [0, 1, 3], "charg": [0, 1, 3], "discharg": [0, 1], "e_": [0, 1], "sum_": [0, 1], "o_": [0, 1], "end": [0, 1, 2, 3], "align": [0, 1], "leq": [0, 1], "hat": [0, 1], "_": [0, 1], "d_": [0, 1], "sum_r": 0, "k_": [0, 1], "kcl": 0, "c_": [0, 1], "c": [0, 1, 3, 4], "x_": [0, 1], "cycl": [0, 1], "eta": [0, 1], "0_": [0, 1], "1_": [0, 1], "frac": [0, 1], "2_": [0, 1], "consist": [0, 1], "cyclic": [0, 1, 3], "decis": [0, 1], "dispatch": [0, 4], "step": [0, 1], "di": [0, 1], "denot": [0, 1], "state": [0, 1, 3], "paramet": [0, 1, 3], "margin": [0, 1, 3], "cost": [0, 3], "reactanc": 0, "incid": 0, "rate": [0, 1, 3], "full": [0, 1, 3], "refer": [0, 1, 2, 3], "see": [0, 1, 2, 4], "en": [0, 1, 2, 3, 4], "latest": [0, 1, 3, 4], "optimal_power_flow": [0, 1], "html": [0, 1, 2, 3, 4, 5], "let": [0, 1, 2, 3, 4], "get": [0, 1, 2, 4], "acquaint": 0, "variant": 0, "one": [0, 1, 2, 3, 4], "we": [0, 1, 2, 3, 4, 5], "mwh": [0, 1, 3], "th": [0, 1], "fuel_cost": 0, "dict": [0, 2, 4], "100": [0, 1, 3, 4], "5": [0, 1, 2, 3, 4], "thermal": 0, "el": 0, "58": 0, "45": 0, "co_2": 0, "8": [0, 1, 4], "power_pl": 0, "ca": 0, "35000": 0, "30000": 0, "5000": 0, "me": [0, 4], "60000": 0, "52000": 0, "40000": [0, 3], "By": 0, "without": 0, "alia": 0, "first": [0, 1, 2, 3, 4], "creat": [0, 2, 3, 4], "new": [0, 1, 2, 4], "object": [0, 1, 3, 4], "which": [0, 1, 2, 3, 4, 5], "serv": 0, "overal": 0, "n": [0, 1, 3, 4], "second": [0, 1], "need": [0, 1, 2, 3, 4], "fundament": 0, "enforc": [0, 1], "conserv": 0, "element": [0, 1, 4], "feed": [0, 1], "out": [0, 4], "kirchhoff": 0, "current": [0, 3, 4], "law": 0, "add": [0, 1, 3, 4], "function": [0, 1, 2, 3, 4], "take": [0, 1, 2], "argument": [0, 1, 2, 4], "possibl": [0, 1, 4], "further": 0, "keyword": [0, 4], "countri": [0, 1], "our": 0, "x": [0, 1, 2, 4], "122": 0, "17": 0, "y": [0, 2, 4], "37": 0, "42": [0, 1], "v_nom": 0, "400": 0, "99": 0, "10": [0, 1, 2, 3, 4], "19": 0, "38": [0, 1, 3, 4], "class": 0, "describ": [0, 2], "datafram": [0, 1, 4], "static": 0, "attribut": [0, 1], "v_mag_pu_set": 0, "v_mag_pu_min": 0, "v_mag_pu_max": 0, "sub_network": 0, "inf": 0, "pq": 0, "than": [0, 1, 2, 3], "specifi": [0, 2], "while": [0, 1, 2, 3, 4, 5], "them": [0, 1, 4], "fill": 0, "default": [0, 1, 4], "were": [0, 1, 4], "field": 0, "statu": [0, 1, 2, 4], "requir": [0, 1, 4], "option": [0, 1, 2, 3, 4], "here": [0, 1, 2, 3, 4, 5], "analog": 0, "There": [0, 4], "call": [0, 2, 4], "madd": [0, 1], "allow": [0, 1, 2, 3, 4], "multipl": [0, 3], "instanc": [0, 4], "inform": [0, 2, 4], "again": [0, 1, 2], "list": [0, 2, 4], "scalar": 0, "dictionari": 0, "latter": 0, "kei": [0, 2], "indic": 0, "co2_emiss": [0, 1], "nice_nam": 0, "onshor": [0, 1, 4], "black": 0, "grei": 0, "yellow": 0, "dodgerblu": [0, 1], "index": [0, 1, 2, 3, 4], "dtype": [0, 1, 3], "veri": [0, 4], "ani": [0, 1, 2, 4], "next": [0, 1, 3], "In": [0, 1, 2, 3, 4], "mexico": 0, "p_nom": [0, 3], "marginal_cost": [0, 1, 3], "california": 0, "loop": 0, "tech": [0, 1], "item": [0, 2], "f": [0, 1, 2], "As": [0, 4], "p_nom_extend": [0, 1, 3], "p_nom_min": 0, "p_nom_max": 0, "p_min_pu": 0, "p_max_pu": [0, 1, 3], "p_set": [0, 1, 3], "min_up_tim": 0, "min_down_tim": 0, "up_time_befor": 0, "down_time_befor": 0, "ramp_limit_up": 0, "ramp_limit_down": 0, "ramp_limit_start_up": 0, "ramp_limit_shut_down": 0, "weight": [0, 1, 3], "p_nom_opt": [0, 1], "fals": [0, 1, 4], "nan": [0, 1], "4": [0, 1, 3, 4], "row": [0, 1, 4], "33": 0, "column": [0, 1, 2, 4], "re": [0, 1, 2, 4], "go": [0, 1, 2, 3], "posit": 0, "mean": [0, 3, 4], "consumpt": [0, 3], "q_set": 0, "sign": 0, "final": [0, 1, 4], "20": [0, 1, 2], "gw": [0, 1, 3, 4], "bus0": [0, 3], "bus1": [0, 3], "s_nom": 0, "20e3": 0, "b": [0, 2], "s_nom_extend": 0, "s_nom_min": 0, "v_ang_min": 0, "v_ang_max": 0, "x_pu": 0, "r_pu": 0, "g_pu": 0, "b_pu": 0, "x_pu_eff": 0, "r_pu_eff": 0, "s_nom_opt": 0, "20000": [0, 3], "29": [0, 1], "sneak": 0, "peek": 0, "built": [0, 1, 3, 4], "detail": [0, 4], "bit": [0, 1], "bus_siz": 0, "color_geomap": 0, "true": [0, 1, 2, 3, 4], "opt": [0, 1, 2, 4], "hostedtoolcach": [0, 1, 2], "3": [0, 1, 2, 3, 4], "11": [0, 1, 2, 3], "6": [0, 1, 2, 3, 4], "x64": [0, 1, 2], "lib": [0, 1, 2], "python3": [0, 1, 2], "site": [0, 1], "__init__": 0, "py": [0, 1, 2, 4], "241": 0, "downloadwarn": 0, "naturalearth": 0, "s3": 0, "amazonaw": 0, "com": [0, 1, 2, 4], "50m_physic": 0, "ne_50m_land": 0, "zip": 0, "ne_50m_ocean": 0, "50m_cultur": 0, "ne_50m_admin_0_boundary_lines_land": 0, "mpl": 0, "style": [0, 1, 3, 4], "76": 0, "userwarn": [0, 1], "facecolor": 0, "effect": 0, "ha": [0, 3, 4], "been": [0, 1, 4], "defin": [0, 1, 3], "never": 0, "ne_50m_coastlin": 0, "With": 0, "now": [0, 1], "run": [0, 4], "singl": [0, 1, 3, 4], "optim": [0, 3, 4], "least": [0, 1], "most": [0, 2, 4], "relev": 0, "moment": 0, "choic": 0, "alreadi": [0, 1, 2, 4], "know": [0, 1, 4], "cbc": 0, "glpk": 0, "gurobi": 0, "etc": [0, 1], "solver_nam": [0, 1, 3, 4], "high": [0, 1, 3, 4], "info": [0, 1, 3, 4], "write": [0, 1, 3, 4], "02": [0, 1, 4], "log": [0, 1, 3, 4], "tmp": [0, 1, 3, 4], "constant": [0, 1, 3, 4], "success": [0, 1, 4], "ok": [0, 1, 4], "termin": [0, 1, 4], "condit": [0, 1, 4], "solut": [0, 1, 4], "primal": [0, 1, 4], "12": [0, 1, 3, 4], "dual": [0, 1, 4], "22e": 0, "04": [0, 1, 3], "messag": [0, 1, 4], "shadow": [0, 1, 4], "price": [0, 1, 4], "p": [0, 1, 2, 4], "lower": [0, 1, 4], "upper": [0, 1, 4], "assign": [0, 1, 4], "date": [0, 1, 4], "05": [0, 1, 3, 4], "16": [0, 1, 3, 4], "git": [0, 1, 4], "hash": [0, 1, 4], "594fa5a9d": [0, 1, 4], "dirti": [0, 1, 4], "copyright": [0, 1, 4], "under": [0, 1, 4], "mit": [0, 1, 4], "licenc": [0, 1, 4], "presolv": [0, 1, 4], "col": [0, 1, 4], "nonzero": [0, 1, 4], "reduct": [0, 1, 4], "13": [0, 1, 3, 4], "lp": [0, 1, 4], "ekk": [0, 1, 4], "simplex": [0, 1, 4], "serial": [0, 1, 4], "iter": [0, 1, 4], "infeas": [0, 1, 4], "num": [0, 1, 4], "sum": [0, 1, 2, 4], "8097086805e": 0, "03": [0, 1], "pr": [0, 1, 4], "42000": 0, "0s": [0, 1, 4], "2222222222e": 0, "origin": [0, 1, 4, 5], "after": [0, 1, 4], "postsolv": [0, 1, 4], "00": [0, 1, 2, 3, 4], "sinc": [0, 3], "quantiti": 0, "locat": [0, 1, 2, 4], "generators_t": [0, 1, 4], "thu": 0, "find": [0, 1, 4], "snapshot": [0, 1, 3, 4], "2000": 0, "prefer": 0, "relat": [0, 3], "when": [0, 1, 3, 4], "cover": [0, 5], "particular": 0, "hour": [0, 1, 4], "similarli": 0, "lines_t": 0, "p0": 0, "p1": 0, "tell": [0, 1, 3, 4], "what": [0, 1, 3], "buses_t": 0, "marginal_pric": 0, "111111": 0, "statist": [0, 1, 3], "modul": [0, 2, 4], "come": [0, 2, 4], "handi": [0, 2, 4], "quick": [0, 3, 4], "overview": [0, 4], "factor": [0, 1, 4], "capit": [0, 1, 3], "expenditur": [0, 3], "curtail": 0, "oper": [0, 2, 3], "revenu": 0, "suppli": [0, 1, 3, 4], "withdraw": 0, "22222": 0, "222222": 0, "000000": [0, 1], "333333": 0, "92000": 0, "280193": 0, "577777": 0, "777777": 0, "help": 0, "some": [0, 1, 2, 3, 4], "old": 0, "friend": 0, "pyplot": [0, 1, 2, 3, 4], "plt": [0, 1, 2, 3, 4], "cr": [0, 4], "ccr": 0, "collect": [0, 1, 2], "patchcollect": 0, "0x7f5e7b02c9d0": 0, "linecollect": 0, "0x7f5e7b156490": 0, "provid": [0, 2, 4, 5], "coordin": [0, 4], "try": [0, 1, 2, 4], "Of": 0, "deactiv": 0, "behaviour": 0, "geomap": 0, "tweak": [0, 4], "appear": [0, 3], "background": 0, "bus_color": 0, "orang": 0, "bus_alpha": 0, "7": [0, 1, 2, 3, 4], "line_color": 0, "orchid": 0, "line_width": [0, 4], "titl": 0, "test": [0, 1], "just": [0, 2, 4], "geopanda": [0, 4, 5], "also": [0, 1, 2, 3, 4], "project": [0, 1, 2], "fig": [0, 1, 2, 4], "figur": [0, 4], "figsiz": [0, 1, 2, 3, 4], "ax": [0, 1, 2, 3, 4], "equalearth": 0, "displai": 0, "region": [0, 1, 2, 4], "total": [0, 1], "groupbi": [0, 1, 2], "1e4": [0, 3], "float64": [0, 1, 3], "pass": [0, 2], "point": [0, 4], "entri": [0, 2], "its": 0, "match": [0, 2], "even": [0, 5], "produc": [0, 3, 4], "pie": [0, 1], "chart": [0, 1, 4], "mix": 0, "loc": [0, 1, 2, 3, 4], "group": 0, "multi": 0, "3000": 0, "how": [0, 1, 3, 4], "magic": 0, "level": [0, 2, 3, 4], "exist": [0, 2], "easi": 0, "want": [0, 1, 2, 3, 4], "reduc": 0, "half": 0, "d": 0, "slack": 0, "15000": 0, "12e": 0, "06": 0, "empti": [0, 1], "1245210728e": 0, "product": [0, 4], "hydro": 0, "wa": [0, 1, 5], "increas": 0, "ow": 0, "12000": 0, "abov": [0, 1], "happen": [0, 1], "spare": 0, "could": [0, 4], "instead": 0, "expens": [0, 4], "implement": [0, 1], "achiev": 0, "through": [0, 1], "appli": [0, 1], "But": [0, 1, 4], "sensibl": 0, "tonn": 0, "co": [0, 1, 3], "_2": [0, 1, 3], "wai": [0, 4], "cdot": 0, "rho_": 0, "eta_": 0, "rho": 0, "4137": 0, "931034": 0, "8888": 0, "888889": 0, "13026": 0, "819923371648": 0, "so": [0, 1, 2, 4], "sai": [0, 2], "emission_limit": 0, "carrier_attribut": [0, 1], "sens": [0, 1], "27e": 0, "18": [0, 4], "2711598746e": 0, "12909": 0, "090909": 0, "4090": 0, "909091": 0, "368831": 0, "818182": 0, "global_constraint": [0, 1, 3, 4], "mu": 0, "112": 0, "566845": 0, "anoth": [0, 1, 3], "85": 0, "warn": [0, 3, 4], "fail": 0, "detect": 0, "0000000000e": [0, 1, 4], "No": 0, "addit": [0, 3], "exhaust": 0, "co2": [0, 1], "import_export": 0, "mai": 0, "yourself": 0, "later": 0, "Or": 0, "mayb": 0, "geniu": 0, "someon": 0, "els": [0, 2], "upload": 0, "web": 0, "explor": [0, 1, 3], "netcdf": 0, "nc": [0, 2, 3, 4], "folder": 0, "csv": [0, 1, 3, 4], "advantag": 0, "less": 0, "space": 0, "faster": 0, "might": [0, 1, 2, 3], "easier": 0, "excel": 0, "export_to_csv_fold": 0, "directori": [0, 2], "n_csv": 0, "export_to_netcdf": 0, "n_nc": 0, "german": 0, "scigrid": 0, "european": 0, "compris": 0, "renew": [0, 1], "resolut": [0, 1, 3], "januari": 0, "2011": 0, "approxim": 0, "2014": 0, "dataset": [0, 2, 4], "littl": [0, 2], "intend": 0, "demonstr": [0, 1], "capabl": 0, "scigrid_d": 0, "from_mast": 0, "github": [0, 4, 5], "raw": [0, 1, 4], "master": [0, 1, 4], "de": [0, 1, 2, 3, 4], "gen": 0, "trafo": 0, "version": [0, 1, 2, 3, 4, 5], "v0": [0, 3, 4], "25": [0, 1, 2, 3, 4], "read": [0, 1, 2, 3, 4], "releas": [0, 3, 4], "note": [0, 2, 3, 4], "release_not": [0, 3, 4], "prepar": [0, 3, 4], "storage_unit": [0, 1, 3, 4], "extens": [0, 4], "moreov": 0, "secur": 0, "don": 0, "70": [0, 1], "overload": 0, "failur": 0, "trip": 0, "s_max_pu": 0, "316": 0, "527": 0, "602": 0, "1715": 0, "becaus": [0, 2, 4], "terminolog": 0, "case": [0, 1, 4], "repres": [0, 1, 3], "datetimeindex": [0, 1], "01": [0, 1, 2, 3, 4], "07": [0, 1], "08": [0, 1, 3, 4], "09": [0, 1, 4], "14": [0, 1], "15": [0, 1, 4], "21": [0, 3, 4], "22": 0, "23": 0, "datetime64": [0, 1], "ns": [0, 1], "freq": [0, 1], "none": [0, 2, 4], "loads_t": [0, 1, 3], "head": [0, 1, 2, 3], "382_220kv": 0, "384_220kv": 0, "385_220kv": 0, "391_220kv": 0, "403_220kv": 0, "404_220kv": 0, "413_220kv": 0, "421_220kv": 0, "450_220kv": 0, "458_220kv": 0, "231": 0, "716206": 0, "40": [0, 1, 2], "613618": 0, "66": 0, "790442": 0, "196": 0, "124424": 0, "147": 0, "804142": 0, "123": 0, "671946": 0, "83": [0, 1], "637404": 0, "73": 0, "280624": 0, "175": [0, 1], "260369": 0, "298": 0, "900165": 0, "202": 0, "010114": 0, "222": 0, "695091": 0, "212": 0, "621816": 0, "77": [0, 1], "570241": 0, "148970": 0, "092794": 0, "427056": 0, "67": [0, 3], "013686": 0, "449243": 0, "752618": 0, "221": 0, "822547": 0, "879526": 0, "63": [0, 1, 4], "938670": 0, "187": 0, "750439": 0, "141": 0, "493303": 0, "118": 0, "391487": 0, "80": [0, 1], "066312": 0, "151738": 0, "167": 0, "777223": 0, "286": 0, "137932": 0, "193": 0, "384825": 0, "213": [0, 1], "186609": 0, "203": 0, "543436": 0, "74": 0, "258201": 0, "459452": 0, "088831": 0, "55": [0, 3], "932378": 0, "64": [0, 1], "152382": 0, "36": 0, "807564": 0, "902460": 0, "127360": 0, "355494": 0, "61": [0, 1], "432348": 0, "180": [0, 4], "390839": 0, "135": [0, 1], "946929": 0, "113": 0, "750678": 0, "927805": 0, "401871": 0, "161": 0, "200550": 0, "274": 0, "921657": 0, "185": 0, "804364": 0, "204": 0, "829941": 0, "195": 0, "564769": 0, "71": 0, "347365": 0, "853460": 0, "085349": 0, "53": [0, 4], "739893": 0, "637683": 0, "35": 0, "364750": 0, "397558": 0, "485": 0, "syntax": 0, "axi": [0, 1, 2, 4], "div": [0, 1, 2, 3, 4], "1e3": [0, 1, 2, 3, 4], "ylim": [0, 1, 3, 4], "60": [0, 1, 2], "ylabel": [0, 1, 3, 4], "xlabel": [0, 1, 3], "u": 0, "inspect": [0, 1], "barh": 0, "2e5": 0, "random": 0, "uniqu": 0, "06x": 0, "randint": 0, "0xffffff": 0, "hard": [0, 4], "river": 0, "wast": 0, "brown": 0, "nuclear": [0, 1], "geotherm": 0, "cann": 0, "legend": [0, 1, 3], "add_legend_patch": 0, "2e4": 0, "legend_kw": 0, "frameon": [0, 1], "bbox_to_anchor": 0, "few": [0, 1, 2, 3, 4], "max_hour": [0, 1], "efficiency_stor": [0, 1], "efficiency_dispatch": [0, 1], "build_year": 0, "lifetim": [0, 1], "state_of_charge_initi": 0, "state_of_charge_initial_per_period": 0, "state_of_charge_set": 0, "cyclic_state_of_charg": [0, 1], "cyclic_state_of_charge_per_period": 0, "standing_loss": 0, "100_220kv": 0, "pump": 0, "144": 0, "95": 0, "114": 0, "138": 0, "121": [0, 3], "238": 0, "ll": 0, "short": [0, 1], "zero": [0, 2], "break": [0, 2], "24": [0, 3], "26": 0, "30": [0, 1, 2], "32": 0, "46": 0, "52": 0, "56": 0, "68": 0, "69": 0, "78": [0, 1, 4], "86": 0, "87": 0, "94": 0, "96": [0, 1], "104": [0, 3], "105": 0, "106": [0, 1], "107": 0, "117": 0, "120": 0, "124": [0, 1], "125": 0, "128": [0, 1, 3, 4], "129": 0, "143": 0, "156": 0, "157": 0, "159": 0, "160": 0, "165": 0, "184": 0, "191": [0, 1, 3, 4], "201": 0, "220": 0, "232": 0, "233": 0, "236": 0, "247": 0, "248": 0, "250": 0, "251": 0, "252": 0, "261": 0, "263": 0, "264": 0, "267": [0, 2], "272": [0, 2], "279": 0, "281": 0, "282": 0, "292": 0, "303": 0, "307": 0, "308": 0, "312": 0, "315": 0, "317": 0, "322": 0, "332": 0, "334": 0, "336": 0, "338": 0, "351": 0, "353": 0, "360": 0, "362": 0, "382": 0, "384": 0, "385": 0, "391": 0, "403": 0, "404": 0, "413": 0, "421": 0, "450": 0, "458": 0, "255m": [0, 1, 3, 4], "0m": [0, 1, 3, 4], "68it": 0, "27": [0, 1, 3], "30it": 0, "38it": 0, "continu": [0, 1, 3, 4], "75it": 0, "18737": 0, "44750": 0, "113266": 0, "13174": 0, "38993": 0, "104901": 0, "12711": 0, "31697": 0, "97392": 0, "130257": 0, "27943": 0, "163906": 0, "ph1": 0, "17270": 0, "1992880405e": 0, "du": [0, 1, 4], "41905e": 0, "4s": 0, "59": 0, "59640": 0, "142968": 0, "20e": 0, "p_dispatch": [0, 1, 4], "p_store": [0, 1, 4], "state_of_charg": [0, 1, 4], "energy_bal": [0, 1, 4], "line_load": 0, "iloc": [0, 2], "ab": 0, "norm": 0, "normal": 0, "vmin": [0, 2], "vmax": 0, "line_norm": 0, "line_cmap": 0, "plasma": 0, "1000": [0, 2], "colorbar": 0, "cm": 0, "scalarmapp": 0, "cmap": [0, 2, 3, 4], "label": [0, 3], "rel": [0, 2, 3], "shrink": 0, "valueerror": [0, 2], "traceback": [0, 2], "recent": [0, 2], "last": [0, 2], "2326": 0, "mappabl": 0, "cax": 0, "kwarg": 0, "2321": 0, "2322": 0, "rais": [0, 2, 4], "runtimeerror": 0, "found": [0, 4], "2323": 0, "creation": 0, "2324": 0, "imag": 0, "imshow": [0, 4], "contour": 0, "2325": 0, "contourf": 0, "ret": 0, "gcf": 0, "2327": 0, "return": [0, 1, 2, 3, 4], "1285": 0, "figurebas": 0, "self": [0, 2], "use_gridspec": 0, "1283": 0, "1284": 0, "1286": 0, "unabl": 0, "determin": [0, 1], "steal": 0, "1287": 0, "either": [0, 1], "1288": 0, "1289": 0, "1290": 0, "logic": 0, "copi": 0, "make_ax": 0, "1291": 0, "flat": [0, 1], "isinst": 0, "np": [0, 2, 3], "ndarrai": 0, "1292": 0, "1293": 0, "1294": 0, "current_ax": 0, "gca": 0, "p_by_carri": [0, 1], "subplot": [0, 1, 2], "kind": 0, "area": [0, 1, 4], "linewidth": [0, 1, 2], "tab20b": 0, "ncol": 0, "left": 0, "set_ylabel": [0, 1], "set_ylim": [0, 1], "aggreg": [0, 2, 4], "throughout": [0, 4], "dai": 0, "p_storag": 0, "storage_units_t": [0, 1, 4], "gwh": [0, 1], "grid": [0, 2, 3], "lmp": 0, "bus_cmap": 0, "bus_norm": 0, "review": 1, "formul": 1, "below": [1, 3], "adapt": 1, "promot": 1, "correspond": [1, 4], "constraint": [1, 3, 4], "potenti": [1, 3], "known": 1, "quad": 1, "w_t": 1, "c_sg_": 1, "balanc": 1, "underlin": 1, "overlin": 1, "star": 1, "number": [1, 3], "minimum": 1, "maximum": 1, "optimis": [1, 2], "import": [1, 2, 3, 4], "pd": [1, 2, 3, 4], "bmh": [1, 3, 4], "maintain": 1, "databas": 1, "assumpt": [1, 3], "given": [1, 2, 3], "year": [1, 3, 4], "pre": 1, "convert": [1, 3], "arrang": 1, "dimens": [1, 4], "2030": 1, "url": [1, 2, 3, 4], "githubusercont": [1, 4], "costs_": 1, "read_csv": [1, 3, 4], "index_col": [1, 3, 4], "str": [1, 2], "kw": [1, 3], "replac": [1, 4], "fom": 1, "vom": 1, "intens": 1, "discount": 1, "unstack": 1, "fillna": 1, "ocgt": [1, 3], "ccgt": 1, "small": [1, 2], "util": 1, "annuiti": 1, "annualis": 1, "formula": 1, "def": [1, 2, 3], "09439292574325567": 1, "stmgc": 1, "capital_cost": [1, 3], "lambda": [1, 2], "recycl": 1, "germani": [1, 3, 4], "2015": [1, 3, 4], "tubcloud": [1, 2, 3, 4], "tu": [1, 2, 3, 4, 5], "berlin": [1, 2, 3, 4, 5], "pkttfadrbtksjkf": 1, "lectur": [1, 4], "ts": [1, 4], "parse_d": [1, 3, 4], "onwind": [1, 3, 4], "offwind": [1, 3], "41": 1, "151": 1, "1566": 1, "7030": 1, "1659": 1, "6875": 1, "39": 1, "1746": 1, "6535": 1, "tempor": [1, 3], "sampl": 1, "everi": [1, 3, 4], "save": 1, "resampl": 1, "h": 1, "build": [1, 4], "replica": 1, "tool": [1, 4], "meet": 1, "combin": 1, "world": [1, 2], "deviat": 1, "profil": [1, 3], "rather": 1, "code": [1, 2, 4], "network": [1, 3, 4], "set_snapshot": 1, "31": 1, "length": [1, 2], "2190": [1, 3, 4], "4h": 1, "snapshot_weight": 1, "underground": [1, 3], "batteri": [1, 3], "aquamarin": 1, "gold": 1, "indianr": 1, "magenta": 1, "yellowgreen": 1, "check": [1, 2], "whether": 1, "correctli": 1, "almost": 1, "ident": 1, "make": [1, 4], "sure": 1, "cf": 1, "At": 1, "stage": 1, "8764": 1, "19714": 1, "75e": 1, "ext": [1, 4], "9900": 1, "7714": 1, "23130": 1, "9814": 1, "1050": 1, "10864": 1, "17971e": 1, "7704": 1, "7530963951e": 1, "billion": 1, "euro": 1, "1e9": [1, 3], "530963951090595": 1, "182246": 1, "399533": 1, "82": 1, "323420": 1, "1e6": [1, 2], "twh": [1, 3], "258": 1, "400419": 1, "131": 1, "445301": 1, "89": [1, 3], "080020": 1, "across": [1, 4], "opex": 1, "m": [1, 3], "capex": 1, "16995": 1, "471518": 1, "6706": 1, "035432": 1, "3829": 1, "457001": 1, "newest": 1, "aggregate_tim": 1, "interest": [1, 2], "mt": 1, "78849522983278": 1, "frame": 1, "stack": [1, 2, 4], "should": [1, 2, 4], "colour": 1, "plot_dispatch": 1, "sto": 1, "concat": [1, 2, 4], "dropna": [1, 3], "k": [1, 2], "200": [1, 4], "oj": 1, "complic": 1, "alright": 1, "miss": 1, "share": [1, 3], "too": 1, "fulli": [1, 3], "both": [1, 2], "period": [1, 2], "must": 1, "equal": 1, "invert": [1, 2], "compos": 1, "salt": 1, "cavern": 1, "168": 1, "weekli": 1, "chang": [1, 4], "57": 1, "79": 1, "72it": 1, "63it": 1, "174": 1, "11it": 1, "27420": 1, "20856": 1, "75690": 1, "22956": 1, "24006": 1, "42373e": 1, "29480": 1, "67564e": 1, "2s": 1, "34": 1, "21906": [1, 4], "50376": 1, "70182": 1, "245794": 1, "42399": 1, "532710": 1, "82323": 1, "420397": 1, "noth": 1, "same": 1, "offer": [1, 4], "suffici": 1, "cheap": 1, "enough": [1, 4], "backup": [1, 3], "low": 1, "flexibl": [1, 3, 4], "disappear": 1, "global": 1, "co2limit": [1, 3], "99it": 1, "90it": 1, "176": 1, "50377": [1, 4], "55e": 1, "25230": [1, 4], "18665": [1, 4], "69120": [1, 4], "25147": [1, 4], "3241": [1, 4], "32766": [1, 4], "32502e": 1, "12614": 1, "7259174995e": 1, "5117": 1, "18071e": 1, "93933e": 1, "5s": [1, 3, 4], "23432": 1, "5542941965e": 1, "42457e": 1, "5542206026e": 1, "220958": 1, "961317": 1, "75825": 1, "717685": 1, "251269": 1, "009694": 1, "35544": 1, "217482": 1, "61986": 1, "162254": 1, "265305": 1, "10413": 1, "675259": 1, "quit": 1, "_matplotlib": 1, "core": 1, "1600": 1, "attempt": 1, "singular": 1, "automat": [1, 3, 4], "expand": 1, "keen": 1, "constitut": 1, "largest": 1, "helper": 1, "system_cost": 1, "tsc": 1, "droplevel": 1, "million": 1, "3427": 1, "563054": 1, "17118": 1, "054285": 1, "11992": 1, "773707": 1, "21315": 1, "499152": 1, "11688": 1, "315828": 1, "136": 1, "85254425062647": 1, "alwai": [1, 4], "consid": 1, "multipli": 1, "analys": 1, "activ": [1, 4], "regard": 1, "variat": 1, "overnight": 1, "150": [1, 3], "50": [1, 2], "86it": 1, "48it": 1, "25it": 1, "27421": 1, "77880": 1, "27111": 1, "41394e": 1, "85it": [1, 4], "89it": 1, "173": 1, "06it": 1, "23658": 1, "7089514846e": 1, "2225": 1, "50276e": 1, "80653e": 1, "28498": 1, "7856903413e": 1, "7s": 1, "79e": 1, "36it": 1, "21e": 1, "16638": 1, "0458834451e": 1, "10898": 1, "52558e": 1, "11146e": 1, "25919": 1, "0945948587e": 1, "2739": 1, "94556e": 1, "29588e": 1, "30681": 1, "2113939120e": 1, "28121e": 1, "78it": 1, "65": 1, "05it": 1, "70it": 1, "df": [1, 4], "xlim": 1, "bn": [1, 3], "inspir": 1, "rerun": 1, "2050": 1, "cannot": 1, "had": 1, "averag": [1, 3], "lowest": 1, "bad": 1, "On": 1, "drop": 1, "similar": [1, 4], "perform": [1, 3], "answer": [1, 4], "would": [1, 2, 3, 4], "chosen": 1, "variou": 2, "guid": 2, "task": 2, "upcom": 2, "gi": 2, "exclusioncontain": 2, "shape_avail": 2, "rasterio": [2, 5], "rio": 2, "plot": [2, 3], "show": [2, 3], "gpd": [2, 4], "xr": [2, 4], "os": [2, 4], "country_convert": 2, "coco": 2, "urllib": [2, 3, 4], "librari": [2, 4], "request": [2, 3, 4], "urlretriev": [2, 3, 4], "fn": [2, 3], "2013": [2, 4], "nl": 2, "bajj9xmn5zlzqzj": 2, "keyboardinterrupt": 2, "270": 2, "filenam": 2, "reporthook": 2, "blocknum": 2, "bs": 2, "size": [2, 3, 4], "269": 2, "block": 2, "fp": 2, "271": 2, "client": [2, 3], "466": 2, "httprespons": 2, "amt": 2, "463": 2, "464": 2, "clip": 2, "respons": 2, "465": 2, "467": 2, "468": 2, "ideal": 2, "incompleteread": 2, "content": 2, "469": 2, "wasn": 2, "satisfi": 2, "compat": 2, "470": 2, "_close_conn": 2, "socket": 2, "706": 2, "socketio": 2, "readinto": 2, "704": 2, "705": 2, "_sock": 2, "recv_into": 2, "707": 2, "except": 2, "timeout": 2, "708": 2, "_timeout_occur": 2, "ssl": 2, "1311": 2, "sslsocket": 2, "buffer": 2, "nbyte": 2, "flag": 2, "1307": 2, "1308": 2, "1309": 2, "non": [2, 4], "1310": 2, "__class__": 2, "1312": 2, "1313": 2, "super": 2, "1167": 2, "len": 2, "1165": 2, "1166": 2, "_sslobj": 2, "1168": 2, "1169": 2, "probav_lc100_global_v3": 2, "1_2019": 2, "nrt_discret": 2, "classif": 2, "map_epsg": 2, "4326": [2, 4], "tif": 2, "567ckizz2y6rlqq": 2, "path": [2, 4], "2fcopernicu": 2, "glc": 2, "wdpa_oct2022_public_shp": 2, "nld": 2, "2fwdpa": 2, "gebco_2014_2d": 2, "2fgebco": 2, "exampl": [2, 3], "netherland": 2, "2fgadm": 2, "gadm_410": 2, "adm_1": 2, "gpkg": 2, "read_fil": [2, 4], "cutout": [2, 4], "copernicu": 2, "climat": 2, "cdsapi": 2, "conda": [2, 4], "regist": 2, "setup": 2, "cd": 2, "api": [2, 4], "websit": [2, 4, 5], "instruct": [2, 4], "depend": [2, 4], "A": [2, 4], "basi": 2, "simpli": 2, "spatial": 2, "extent": 2, "latitud": 2, "longitud": 2, "minx": 2, "mini": 2, "maxx": 2, "maxi": 2, "total_bound": 2, "slice": 2, "initi": 2, "server": 2, "amount": 2, "access": [2, 4], "prepared_featur": 2, "queri": [2, 4], "give": 2, "basic": 2, "previou": [2, 4], "exercis": 2, "plot_area": 2, "mask": 2, "green": [2, 3], "edgecolor": 2, "exclus": 2, "inclus": 2, "criteria": 2, "exclud": [2, 3], "3035": 2, "300": 2, "add_rast": 2, "to_cr": 2, "geometri": [2, 4], "gid_1": 2, "availabilitymatrix": 2, "cap_per_sqkm": 2, "km2": 2, "set_index": [2, 4], "dataarrai": 2, "dim": 2, "capacity_matrix": 2, "solarpanel": 2, "cdte": 2, "orient": 2, "latitude_optim": 2, "per_unit": 2, "to_panda": 2, "windturbin": 2, "vestas_v112_3mw": 2, "often": 2, "more": [2, 3, 4, 5], "granular": 2, "sub": 2, "nation": 2, "actual": 2, "studi": 2, "pattern": 2, "wherea": 2, "geometr": 2, "dissolv": 2, "suppos": 2, "contin": 2, "easili": [2, 4], "org": [2, 4], "stabl": 2, "doc": [2, 4], "user_guid": 2, "aggregation_with_dissolv": 2, "get_path": 2, "naturalearth_lowr": 2, "popul": [2, 3], "strategi": 2, "functionus": 2, "aggfunc": 2, "pop_est": 2, "exot": 2, "letter": 2, "polygon": 2, "sphere": 2, "wikipedia": 2, "wiki": 2, "haversine_formula": 2, "geoseri": 2, "representative_point": 2, "red": 2, "markers": 2, "4087": 2, "iso_a3": 2, "km": 2, "deu": 2, "temperatur": [2, 3], "sel": 2, "previous": [2, 4], "epsg": 2, "km\u00b2": 2, "howev": [2, 4], "correct": 2, "outsid": 2, "europ": [2, 4], "pick": [2, 4], "suitabl": 2, "wg": 2, "84": [2, 3], "equidist": 2, "cylindr": 2, "mollweid": 2, "esri": 2, "54009": 2, "measur": 2, "metr": 2, "area_cr": 2, "distance_cr": 2, "konstantinstadl": 2, "target": 2, "scheme": 2, "name_offici": 2, "iso2": 2, "src": 2, "iso3": 2, "country_list": 2, "ae": 2, "al": 2, "am": 2, "ao": 2, "short_nam": 2, "cc": 2, "countryconvert": 2, "valid_country_classif": 2, "commerci": 2, "free": 2, "academ": 2, "licens": 2, "altern": 2, "longer": 2, "To": [2, 3, 4], "page": [2, 4], "registr": 2, "institut": 2, "mail": 2, "address": 2, "campu": 2, "respect": 2, "www": [2, 4], "quickstart": 2, "softwar": 2, "environ": [2, 5], "gurobipi": 2, "from": [3, 4], "cem": [3, 4], "kpwaragc9leaxlk": [3, 4], "httpmessag": 3, "0x7f24a87113d0": 3, "ouput": 3, "bus2": 3, "bus3": 3, "efficieni": 3, "efficiency2": 3, "efficiency3": 3, "remov": 3, "simplifi": 3, "represent": 3, "50e3": 3, "reconvert": 3, "120e3": 3, "140": 3, "e_nom_extend": 3, "e_cycl": 3, "54671": 3, "88812785388": 3, "mskherh8fjcknxx": 3, "squeez": 3, "61726": 3, "043437": 3, "108787": 3, "133591": 3, "101508": 3, "988082": 3, "90475": 3, "260586": 3, "96307": 3, "755312": 3, "coeffici": 3, "cop": 3, "air": 3, "sink": 3, "ambient": 3, "delta": 3, "81": 3, "00063": 3, "t_": 3, "t_sourc": 3, "t_sink": 3, "delta_t": 3, "000630": 3, "s4jraqmp5te96jw": 3, "ninja_weather_country_de_merra": 3, "2_population_weight": 3, "temp": 3, "skiprow": 3, "scatter": 3, "incorpor": 3, "3e5": 3, "mwe": 3, "resist": 3, "heater": 3, "fire": 3, "todai": 3, "fossil": 3, "methan": 3, "emiss": 3, "limit": 3, "explicitli": [3, 4], "And": 3, "deplet": 3, "e_initi": 3, "100e6": 3, "e_nom": 3, "mwh_th": 3, "do": 3, "backpressur": 3, "boiler": 3, "ev": 3, "9r5bmsbzzqiqg7h": 3, "axhlin": 3, "0x7f24a4115350": 3, "plug": 3, "home": 3, "e3pbwpfyawwcq7a": 3, "availability_profil": 3, "charger": 3, "number_car": 3, "40e6": 3, "car": 3, "bev_charger_r": 3, "011": 3, "phase": 3, "inject": 3, "v2g": 3, "side": 3, "unlik": 3, "impos": 3, "certain": 3, "75": 3, "morn": 3, "bev_energi": 3, "bev_dsm_particip": 3, "smart": 3, "k62yacbrtrxltia": 3, "dsm": 3, "dsm_profil": 3, "e_min_pu": 3, "altogeth": 3, "passeng": 3, "48": [3, 4], "13it": 3, "23it": 3, "51it": 3, "155": 3, "92it": 3, "sort_valu": 3, "bar": 3, "tab20c": 3, "investig": 3, "impact": 3, "pypsa": [4, 5], "atlit": [4, 5], "geoview": 4, "env": 4, "hv_doc_html": 4, "holoview": 4, "hv": 4, "basenam": 4, "2oogpgbfm5n4ssz": 4, "portug": 4, "era5": 4, "94it": 4, "69it": 4, "171": 4, "3s": 4, "32738e": 4, "12190": 4, "7507428468e": 4, "5106": 4, "0176e": 4, "94798e": 4, "22596": 4, "5781554169e": 4, "406": 4, "97246e": 4, "42109e": 4, "23199": 4, "5813180032e": 4, "35755e": 4, "62": 4, "58e": 4, "nwcrnlrtl6lan3w": 4, "powerplantmatch": 4, "powerpl": 4, "ppl": 4, "points_from_xi": 4, "lon": 4, "lat": 4, "geodatafram": 4, "nuts2": 4, "rhzjrn8dnfn26nr": 4, "nuts_rg_10m_2021_4326": 4, "geojson": 4, "nut": 4, "id": 4, "levl_cod": 4, "agre": 4, "great": 4, "report": 4, "lack": 4, "pu": 4, "confus": 4, "keep": 4, "introduc": 4, "mostli": 4, "bokeh": 4, "integr": 4, "These": 4, "shini": 4, "minim": 4, "fewer": 4, "customis": 4, "simpl": 4, "holoviz": 4, "accessor": 4, "becom": 4, "valid": 4, "statement": 4, "befor": 4, "error": 4, "height": 4, "februari": 4, "geograph": 4, "geo": 4, "declar": 4, "tile": 4, "overlai": 4, "fueltyp": 4, "frame_height": 4, "600": 4, "frame_width": 4, "accord": 4, "opac": 4, "alpha": 4, "colormap": 4, "cartolight": 4, "datein": 4, "viridi": 4, "graph": 4, "section": 4, "xaxi": 4, "yaxi": 4, "active_tool": 4, "pan": 4, "wheel_zoom": 4, "shape": 4, "shown": 4, "hover": 4, "hover_col": 4, "osm": 4, "nuts_nam": 4, "nuts_id": 4, "cntr_code": 4, "500": 4, "speed": 4, "notic": 4, "did": 4, "select": 4, "sweep": 4, "quadmesh": 4, "wnd100m": 4, "blue": 4, "pad": 4, "clim": 4, "heatmap": 4, "month": 4, "width": 4, "1300": 4, "350": 4, "electr": 4, "usual": 4, "px": 4, "entir": 4, "part": 4, "recommend": 4, "common": 4, "graph_object": 4, "applic": 4, "alon": 4, "pio": 4, "offlin": 4, "visibl": 4, "reproduc": 4, "scatter_mapbox": 4, "mapbox_styl": 4, "carto": 4, "positron": 4, "zoom": 4, "choropleth_mapbox": 4, "center": 4, "much": [4, 5], "better": 4, "reset_index": 4, "renam": 4, "level_1": 4, "line_group": 4, "update_trac": 4, "brand": 4, "around": 4, "characterist": 4, "eas": 4, "comparison": 4, "best": 4, "datarevenu": 4, "blog": 4, "streamlit": [4, 5], "vs": 4, "dash": 4, "voila": 4, "probabl": 4, "analyt": 4, "readi": 4, "larger": 4, "compani": 4, "prototyp": 4, "quickli": 4, "technic": 4, "team": 4, "mind": 4, "develop": [4, 5], "view": 4, "flask": 4, "own": 4, "ground": 4, "easiest": 4, "configur": 4, "mamba": 4, "forg": 4, "deploi": 4, "fneum": [4, 5], "live": 4, "demo": 4, "ppm": 4, "app": 4, "accompani": 5, "transit": 5, "stanford": 5, "train": 5, "dr": 5, "fabian": 5, "neumann": 5, "depart": 5, "digit": 5, "adjust": 5, "martha": 5, "frysztacki": 5, "maximilian": 5, "parzen": 5, "tailor": 5, "learn": 5, "materi": 5, "data": 5, "scienc": 5, "esm": 5, "intro": 5, "pysh": 5, "plotli": 5, "hvplot": 5, "onlin": 5, "servic": 5}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"introduct": 0, "pypsa": [0, 1, 3], "depend": 0, "basic": 0, "structur": 0, "from": [0, 1, 2], "data": [0, 1, 2, 4], "optimis": 0, "simpl": [0, 1], "electr": [0, 1, 3], "market": [0, 1], "exampl": [0, 1, 4], "build": 0, "network": 0, "plot": [0, 1, 4], "modifi": 0, "global": [0, 2], "constraint": 0, "emiss": [0, 1], "limit": [0, 1, 4], "import": 0, "export": 0, "A": 0, "slightli": 0, "more": 0, "realist": 0, "capac": [1, 3], "expans": [1, 3], "plan": 1, "model": [1, 3], "prerequisit": 1, "handl": 1, "technolog": 1, "cost": 1, "load": [1, 4], "time": 1, "seri": 1, "initialis": 1, "ad": 1, "compon": 1, "run": 1, "evalu": 1, "optim": 1, "dispatch": 1, "storag": 1, "unit": 1, "sensit": 1, "analysi": [1, 2], "exercis": [1, 3], "prepar": 2, "group": 2, "assign": 2, "preparatori": 2, "download": 2, "histor": 2, "weather": 2, "era5": 2, "atlit": 2, "repetit": 2, "land": 2, "elig": 2, "avail": 2, "matrix": 2, "solar": 2, "pv": 2, "profil": 2, "wind": 2, "merg": 2, "shape": 2, "geopanda": 2, "repres": 2, "point": 2, "crow": 2, "fly": 2, "distanc": 2, "equal": 2, "area": 2, "cr": 2, "countri": 2, "convert": 2, "gurobi": 2, "sector": 3, "coupl": 3, "previou": 3, "hydrogen": 3, "product": 3, "heat": 3, "demand": 3, "pump": 3, "combin": 3, "power": 3, "chp": 3, "vehicl": 3, "interact": 4, "visualis": 4, "dashboard": 4, "static": 4, "matplotlib": 4, "hvplot": 4, "plotli": 4, "express": 4, "welcom": 5, "us": 5, "python": 5, "without": 5, "local": 5, "instal": 5}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})
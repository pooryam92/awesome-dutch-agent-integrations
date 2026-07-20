# Awesome Dutch Agent Integrations

> A curated list of MCP servers, skills, and plugins that connect AI assistants to Dutch services, data, and standards.

A curated directory of **Dutch agent-integrations** — MCP servers, skills, and plugins that connect an AI assistant to, or give it working knowledge of, a Dutch service, data source, standard, or authority.

Each listing shows, at a glance, whether it is official, commercial, or community, and how mature it is.

To add an integration, see [CONTRIBUTING.md](CONTRIBUTING.md). Only ever edit the JSON in `/data` — the catalogue below is generated from it by `scripts/generate.mjs`.

<!-- BEGIN CATALOGUE — generated from /data by scripts/generate.mjs. Do not edit between these markers; run `npm run generate`. -->

_Every listing is tagged with its type and origin; a status badge appears only when it is **not** live (beta, preview, concept, abandoned)._

| Category                                    | Listings | Covers                                                        |
| ------------------------------------------- | -------: | ------------------------------------------------------------- |
| [Accounting Finance](#accounting-finance)   |       17 | Exact Online, Adyen, bunq, e-Boekhouden, Mollie, Moneybird, … |
| [Consumer Daily Life](#consumer-daily-life) |        6 | Albert Heijn, Buienradar, HomeWizard, Jumbo, Magister, …      |
| [Developer Standards](#developer-standards) |        9 | Rijksoverheid, Logius, Developer Overheid API Register, …     |
| [Ecommerce Logistics](#ecommerce-logistics) |        6 | Marktplaats, Postcode.eu, bol.com, PostNL                     |
| [Government Services](#government-services) |        5 | KVK, MijnOverheid, RDW, wetten.overheid.nl                    |
| [Housing Property](#housing-property)       |        4 | Funda, Kadaster, Kamernet, Monumenten                         |
| [Legal Compliance](#legal-compliance)       |       16 | wetten.overheid.nl, Rechtspraak.nl, Belastingdienst, …        |
| [Mobility Travel](#mobility-travel)         |        3 | NS, ANWB                                                      |
| [Open Data Culture](#open-data-culture)     |       14 | CBS StatLine, KNMI, data.overheid.nl, Gemeente Amsterdam, …   |

## Accounting Finance

| Name | Description | Target | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [Adyen MCP](https://github.com/Adyen/adyen-mcp) | Create payments and manage merchant configuration and account setup across Adyen's Checkout and Management APIs. | Adyen | ![MCP · Official · Preview](assets/badges/tags-mcp-official-preview.svg) |
| [bunq Partner MCP](https://github.com/bunq/partner-mcp) | Automate bunq banking through the Partner API — onboarding, KYC, accounts, payments, cards, and compliance. | bunq | ![MCP · Official](assets/badges/tags-mcp-official.svg) |
| [e-Boekhouden MCP](https://github.com/CodeMill-Solutions/e-boekhouden-mcp) | Read and write e-Boekhouden administration using your own API credentials. | e-Boekhouden | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [exactmcp.nl](https://exactmcp.nl/) | Run Exact Online warehouse, serial/batch, purchase, production, and inventory workflows through a certified hosted MCP. | Exact Online | ![MCP · Commercial](assets/badges/tags-mcp-commercial.svg) |
| [Finance MCP](https://financemcp.nl/) | Query Dutch bookkeeping read-only through a hosted EU MCP endpoint, spanning eight accounting packages (Exact Online, Business Central, e-Boekhouden, SnelStart, AFAS, Twinfield, Dynamics 365, Moneybird) via one canonical data model. | Exact Online | ![MCP · Commercial](assets/badges/tags-mcp-commercial.svg) |
| [finance-skills-nl](https://github.com/start2scale/finance-skills-nl) | Draft month-close packages, reconcile the general ledger, and audit Excel models for Dutch SME finance teams, with every output flagged for human sign-off. | Raad voor de Jaarverslaggeving (RJ) | ![Plugin · Community](assets/badges/tags-plugin-community.svg) |
| [Ledger Botje](https://ledgerbotje.nl/) | Handle Exact Online invoices, orders, inventory, and deliveries through a hosted MCP. | Exact Online | ![MCP · Commercial](assets/badges/tags-mcp-commercial.svg) |
| [Mollie MCP](https://docs.mollie.com/docs/mollie-mcp-server) | Manage the full Mollie stack — payments, customers, invoices, subscriptions, balances, settlements, terminals, and webhooks. | Mollie | ![MCP · Official](assets/badges/tags-mcp-official.svg) |
| [Moneybird MCP](https://developer.moneybird.com/tools/mcp) | Keep Moneybird bookkeeping up to date — invoices, contacts, and ledger data. | Moneybird | ![MCP · Official](assets/badges/tags-mcp-official.svg) |
| [netherlands-invoice-mcp](https://github.com/junter1989k-ai/netherlands-invoice-mcp) | Send Dutch B2B e-facturen over Peppol (BIS 3.0 / EN 16931) via Storecove, with the BTW breakdown computed for you. | Peppol (e-factuur) | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [Nmbrs AI Connector](https://www.nmbrs.com/ai-connector) | Run Dutch payroll actions in Nmbrs, with every write gated behind explicit confirmation. | Nmbrs | ![MCP · Official · Beta](assets/badges/tags-mcp-official-beta.svg) |
| [Praat met je Boekhouding](https://praatmetjeboekhouding.nl/en/exact-online-mcp-server) | Query Exact Online bookkeeping across 86 tools — invoicing, BTW/ICP, and reporting — read-only by default. | Exact Online | ![MCP · Commercial](assets/badges/tags-mcp-commercial.svg) |
| [Simplicate MCP](https://developer.simplicate.com/docs/mcp/getting_started/) | Work with Simplicate project, CRM, and invoicing data through a per-domain hosted endpoint. | Simplicate | ![MCP · Official](assets/badges/tags-mcp-official.svg) |
| [Twinfield MCP](https://github.com/CodeMill-Solutions/twinfield-mcp) | Query and update Twinfield bookkeeping over its SOAP API. | Twinfield | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [visma-mcp-server](https://github.com/Proviscale/visma-mcp-server) | Manage Visma eAccounting invoices, customers, suppliers, vouchers, and orders across 20 tools. | Visma eAccounting | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [WeFact MCP](https://github.com/NickAldewereld/wefact-mcp) | Manage WeFact debtors, invoices, products, and subscriptions. | WeFact | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [Yuki MCP](https://github.com/Dytto-ai/yuki-mcp) | Operate Yuki accounting across 102 actions, with write operations gated for safety. | Yuki | ![MCP · Community](assets/badges/tags-mcp-community.svg) |

## Consumer Daily Life

| Name | Description | Target | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [ah-mcp](https://github.com/mrserzhan/ah-mcp) | Browse Albert Heijn products and Bonus deals, and manage your cart, orders, lists, and receipts. | Albert Heijn | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [buienradar-mcp-server](https://github.com/wpnbos/buienradar-mcp-server) | Pull Buienradar rain nowcasts and current Dutch weather readings. | Buienradar | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [homewizard-mcp-server](https://github.com/mrksmts/homewizard-mcp-server) | Read live HomeWizard P1 smart-meter data — power, per-phase voltages and currents, cumulative kWh, and gas — over the local API, read-only. | HomeWizard | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [mcp-picnic](https://github.com/ivo-toby/mcp-picnic) | Shop Picnic groceries — search products and manage the cart, orders, and deliveries. | Picnic | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [nl-supermarkt-mcp](https://github.com/Samvox1/nl-supermarkt-mcp) | Search products, compare prices, and plan groceries across Dutch supermarkets and drugstores. | Albert Heijn / Jumbo | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [unofficial-magister-mcp](https://github.com/israelroldan/unofficial-magister-mcp) | Look up Dutch school schedules from Magister — daily and weekly timetables plus drop-off and pick-up times, for student and parent accounts. | Magister | ![MCP · Community](assets/badges/tags-mcp-community.svg) |

## Developer Standards

| Name | Description | Target | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [mcp-developer-overheid-api-register](https://github.com/dstotijn/mcp-developer-overheid-api-register) | Search the Developer Overheid API Register for Dutch government APIs and their source repositories. | Developer Overheid API Register | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [NeRDS (MinBZK)](https://github.com/MinBZK/NeRDS) | Fourteen Agent Skills covering Dutch government guidelines — accessibility, privacy, security, procurement, algorithms, and sustainability. | Rijksoverheid | ![Plugin · Official](assets/badges/tags-plugin-official.svg) |
| [overheid-plugins](https://github.com/djimit/overheid-plugins) | Fifty-plus skills spanning Dutch government architecture and standards — NORA, GEMMA Common Ground, ZGW APIs, AVG/DPIA, the Omgevingswet (DSO), and municipal, provincial, and water-board IV. | Rijksoverheid | ![Plugin · Community](assets/badges/tags-plugin-community.svg) |
| [skills-developer-overheid-nl](https://github.com/developer-overheid-nl/skills-developer-overheid-nl) | Eight skills applying Dutch government developer guidance — APIs, DigiD/eHerkenning, open source, FSC/Haven, data, and NL Design System. | Logius | ![Plugin · Official](assets/badges/tags-plugin-official.svg) |
| [skills-geo](https://github.com/developer-overheid-nl/skills-geo) | Skills for Geonovum geo-standards — OGC API, NEN 3610, INSPIRE, and 3D geo-information. | Geonovum | ![Plugin · Official](assets/badges/tags-plugin-official.svg) |
| [skills-internet](https://github.com/developer-overheid-nl/skills-internet) | Skills for internet.nl standards — IPv6, DNSSEC, TLS, DMARC/DKIM/SPF, and DANE. | internet.nl | ![Plugin · Official](assets/badges/tags-plugin-official.svg) |
| [skills-open-source-repo](https://github.com/developer-overheid-nl/skills-open-source-repo) | Skills that generate publiccode.yml and repository-governance docs for Dutch government open-source projects. | Rijksoverheid | ![Plugin · Official](assets/badges/tags-plugin-official.svg) |
| [skills-standaarden](https://github.com/developer-overheid-nl/skills-standaarden) | Ten skills for Logius standards — API Design Rules, Digikoppeling, OAuth NL, and FSC — with Spectral and WCAG validation. | Logius | ![Plugin · Official · Concept](assets/badges/tags-plugin-official-concept.svg) |
| [zad-actions](https://github.com/RijksICTGilde/zad-actions) | Reusable GitHub Actions to deploy, clean up, and schedule cleanup of container deployments on the Rijk's ZAD (Zelfservice voor Applicatie Deployment) platform. | Rijksoverheid | ![Plugin · Official](assets/badges/tags-plugin-official.svg) |

## Ecommerce Logistics

| Name | Description | Target | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [bol-mcp](https://github.com/BartWaardenburg/bol-mcp) | Reach bol.com's Retailer API through 76 tools spanning orders, offers, and product listings. | bol.com | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [marktplaats-mcp](https://github.com/PonClick/marktplaats-mcp) | Search and read listings from Marktplaats.nl. | Marktplaats | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [marktplaats-mcp (jasp-nerd)](https://github.com/jasp-nerd/marktplaats-mcp) | Search Marktplaats and 2dehands classifieds with seller-trust signals and new-listing monitoring, no account needed. | Marktplaats | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [mcp-dutch-postal-codes](https://github.com/dstotijn/mcp-dutch-postal-codes) | Retrieve Dutch postal codes and validate address information. | Postcode.eu | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [postcode-eu-ai-tools](https://github.com/postcode-nl/postcode-eu-ai-tools-python) | Validate and autocomplete Dutch addresses through the official Postcode.eu API. | Postcode.eu | ![MCP · Official](assets/badges/tags-mcp-official.svg) |
| [PostNL MCP](https://github.com/BartWaardenburg/postnl-mcp) | Create shipments and track PostNL parcels, barcodes, and pickup-point locations. | PostNL | ![MCP · Community](assets/badges/tags-mcp-community.svg) |

## Government Services

| Name | Description | Target | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [kvk-connect (MinBZK)](https://github.com/MinBZK/kvk-connect) | Query a ministry-run mirror of KVK company profiles, history, and search data. | KVK | ![MCP · Official](assets/badges/tags-mcp-official.svg) |
| [kvk-mcp](https://github.com/BartWaardenburg/kvk-mcp) | Query the KVK Handelsregister for Dutch company profiles and search, across 10 tools. | KVK | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [moza-poc-digitale-assistent](https://github.com/MinBZK/moza-poc-digitale-assistent) | Reach MijnOverheid Zakelijk and connected government sources through one MCP-backed digital assistant. | MijnOverheid / KVK | ![Plugin · Official · Concept](assets/badges/tags-plugin-official-concept.svg) |
| [poc-machine-law](https://github.com/MinBZK/poc-machine-law) | Query Dutch legislation and check benefits eligibility through the RegelRecht machine-law server. | wetten.overheid.nl | ![MCP · Official · Concept](assets/badges/tags-mcp-official-concept.svg) |
| [rdw-mcp](https://github.com/rantuma/rdw-mcp) | Query RDW vehicle-registration and open data — keyless, no credentials needed. | RDW | ![MCP · Community](assets/badges/tags-mcp-community.svg) |

## Housing Property

| Name | Description | Target | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [kadaster-mcp](https://github.com/jolietjakeblues/kadaster-mcp) | Query the Kadaster Knowledge Graph of Dutch land-registry and parcel data. | Kadaster | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [kamernet-mcp](https://github.com/jasp-nerd/kamernet-mcp) | Search Kamernet rooms, studios, and apartments, read full bilingual listings, and monitor new ones against your budget. | Kamernet | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [makelaar-mcp](https://github.com/spyrosavl/makelaar-mcp) | Search Funda listings and run NHG, NIBUD, mortgage, and closing-cost calculations. | Funda | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [mcp-monumenten](https://github.com/woonstadrotterdam/mcp-monumenten) | Look up a Dutch building's monument status from BAG, RCE, and municipal records. | Monumenten | ![MCP · Community](assets/badges/tags-mcp-community.svg) |

## Legal Compliance

| Name | Description | Target | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [aangifte-ib-skill](https://github.com/mischacoster/aangifte-ib-skill) | A skill that prepares a sourced Dutch personal income-tax return with an adaptive interview and review dossier. | Belastingdienst | ![Skill · Community](assets/badges/tags-skill-community.svg) |
| [Ansvar Gateway (Dutch law)](https://ansvar.eu/docs/quickstart) | Search Dutch legislation and Rechtspraak rulings — alongside EU and other national frameworks — through Ansvar's hosted OAuth gateway, every result citing its source. | wetten.overheid.nl / Rechtspraak.nl | ![MCP · Commercial](assets/badges/tags-mcp-commercial.svg) |
| [Belastingzaken skills](https://github.com/johnhout/knowledge-work-belastingzaken) | Eight commands and eight skills for Dutch income tax, BTW, VPB, payroll tax, deductions, and objections — no filing, professional review required. | Belastingdienst | ![Plugin · Community](assets/badges/tags-plugin-community.svg) |
| [Dutch Standards MCP](https://www.npmjs.com/package/@ansvar/dutch-standards-mcp) | Search Dutch government security and compliance standards — BIO2, NEN 7510, NCSC-NL, DigiD Normenkader, and Logius API Design Rules — with ISO 27002 cross-references. | Overheidsbeveiligingsnormen (BIO2/NEN 7510/NCSC-NL/DigiD) | ![MCP · Commercial](assets/badges/tags-mcp-commercial.svg) |
| [dutch-energy-regulation-mcp](https://github.com/Ansvar-Systems/dutch-energy-regulation-mcp) | Search Dutch energy-regulation records from ACM, TenneT, RVO, and SodM. | Energieregulering (ACM/TenneT/RVO/SodM) | ![MCP · Commercial](assets/badges/tags-mcp-commercial.svg) |
| [dutch-finance-planner-skill](https://github.com/jonnekleijer/dutch-finance-planner-skill) | Coach personal finances for the Netherlands through a guided interview — box 1/2/3, toeslagen, AOW/pension, mortgage/HRA, the 30% ruling, and gift/inheritance tax. | Belastingdienst | ![Skill · Community](assets/badges/tags-skill-community.svg) |
| [FALCON / nl-ai-lawyer](https://github.com/FutureAtoms/FALCON-futureatoms-legal-counsel-of-netherlands) | Advise on Dutch law — employment/CAO, AVG, tax, real estate, and immigration — through 14 skills and 7 specialist agents. | wetten.overheid.nl / Rechtspraak.nl | ![Plugin · Community](assets/badges/tags-plugin-community.svg) |
| [ICTRecht skill](https://www.ictrecht.nl/ictrecht-skill-voor-claude) | A Dutch IT-law firm's methodology as a skill — privacy-officer, compliance, and IE-recht role profiles with DPIA and AI Act assessment structures. | wetten.overheid.nl | ![Skill · Commercial](assets/badges/tags-skill-commercial.svg) |
| [IURA (iura-nl)](https://github.com/iura-ai/IURA-Plugins) | Draft and review Dutch legal documents — contracts, NDAs, juridische notities, and conclusie van antwoord — grounded in Dutch jurisprudence via the IURA MCP. | wetten.overheid.nl / Rechtspraak.nl | ![Plugin · Commercial](assets/badges/tags-plugin-commercial.svg) |
| [Moonlit Legal Research MCP](https://www.moonlit.ai/docs/) | Research Dutch and European legislation, case law, and regulatory sources through seven read-only tools over a hosted OAuth endpoint. | wetten.overheid.nl / Rechtspraak.nl | ![MCP · Commercial](assets/badges/tags-mcp-commercial.svg) |
| [nl-eli-mcp](https://github.com/matematicsolutions/nl-eli-mcp) | Retrieve versioned Dutch legislation (BWB) and Rechtspraak rulings, keyless. | wetten.overheid.nl / Rechtspraak.nl | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [OpenAccountants Plugin](https://github.com/openaccountants/openaccountants) | Classify transactions and apply accountant-verified tax guidance for Dutch VAT, income tax, and social contributions — part of a multi-jurisdiction, CPA-reviewed tax-guide platform. | Belastingdienst | ![Plugin · Community](assets/badges/tags-plugin-community.svg) |
| [rechtspraak-mcp](https://github.com/Prudai/rechtspraak-mcp) | Search Rechtspraak open data and resolve legal citations through LiDO, across six tools. | Rechtspraak.nl | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [rechtspraak-solr-mcp-server](https://github.com/axyr/rechtspraak-solr-mcp-server) | Full-text search Dutch case law in Solr, with query expansion, legal synonyms, and citation analysis. | Rechtspraak.nl | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [Wetsanalyse AI](https://github.com/palmw01/wetsanalyse-ai) | Produce source-traceable analyses of Dutch legislation with the JAS method and formalise them into Belastingdienst RegelSpraak, through a skill plus a bundled wettenbank MCP with human-review checkpoints. | wetten.overheid.nl / Belastingdienst | ![Plugin · Community](assets/badges/tags-plugin-community.svg) |
| [wetten-overheid-tools](https://github.com/palmw01/wetten-overheid-tools) | Search Dutch legislation on wetten.overheid.nl and retrieve its structure, articles, and terms. | wetten.overheid.nl | ![MCP · Community](assets/badges/tags-mcp-community.svg) |

## Mobility Travel

| Name | Description | Target | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [anwb-mcp](https://github.com/BartWaardenburg/anwb-mcp) | Pull ANWB traffic incidents, plan routes with turn-by-turn directions, and search locations. | ANWB | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [NS MCP Server](https://github.com/r-huijts/ns-mcp-server) | Look up NS train departures and disruptions and plan train journeys. | NS (Nederlandse Spoorwegen) | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [ns-travel-mcp](https://github.com/lauragift21/ns-travel-mcp) | Plan NS journeys and check real-time train data and disruption alerts. | NS (Nederlandse Spoorwegen) | ![MCP · Community](assets/badges/tags-mcp-community.svg) |

## Open Data Culture

| Name | Description | Target | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [baarn-raadsinformatie](https://github.com/tiemenrtuinstra/baarn-raadsinformatie) | Search Gemeente Baarn council meetings, agendas, and documents via the Notubiz API, with keyword and semantic search. | Gemeente Baarn | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [Intelligence Group Giant MCP](https://intelligence-group.nl/nl/solutions/mcp/) | Analyse European (incl. Dutch) salary and recruitment-market data, read-only with per-user access control. | Intelligence Group | ![MCP · Commercial](assets/badges/tags-mcp-commercial.svg) |
| [knmi-mcp](https://github.com/wolkwork/knmi-mcp) | Pull KNMI real-time weather observations (10-minute measurements) for Dutch locations. | KNMI | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [knmi-mcp (dstotijn)](https://github.com/dstotijn/knmi-mcp) | Query KNMI weather observations and forecasts through KNMI's open data API. | KNMI | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [mcp-cbs-cijfers-open-data](https://github.com/dstotijn/mcp-cbs-cijfers-open-data) | Makes official Dutch statistics from CBS (StatLine) accessible for AI assistants. | CBS StatLine | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [mcp-gemeente-amsterdam](https://github.com/aronmartin/mcp-gemeente-amsterdam) | Query Amsterdam's open APIs across buildings, WOZ, parking, waste, monuments, permits, soil, and more from one server. | Gemeente Amsterdam | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [mcp-overheid-nl](https://github.com/pipeworx-io/mcp-overheid-nl) | Browse the data.overheid.nl open-data catalogue by publishing organisation and dataset theme. | data.overheid.nl | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [nl-gov-mcp](https://github.com/WAINUTAI/nl-gov-mcp) | Reach 39 Dutch government data sources through one server — CBS, RDW, KNMI, PDOK, Rechtspraak, DUO, and more. | CBS StatLine / RDW / KNMI / Rechtspraak.nl | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [nl-opendata-mcp](https://github.com/soulnai/nl-opendata-mcp) | Search, query, download, and locally analyse CBS (OData) and data.overheid.nl datasets in CSV or Parquet. | CBS StatLine / data.overheid.nl | ![MCP · Community · Beta](assets/badges/tags-mcp-community-beta.svg) |
| [oorlogsbronnen-mcp](https://github.com/r-huijts/oorlogsbronnen-mcp) | Search Oorlogsbronnen's archive of 12 million Dutch WWII sources. | Oorlogsbronnen | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [open-utrecht-datasets](https://github.com/Terminal-WOO/open-utrecht-datasets) | Search, explore, and download Municipality of Utrecht open datasets and Woo documents through six tools. | Gemeente Utrecht | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [openarchieven-mcp](https://github.com/coret/openarchieven-mcp-server) | Search Open Archieven genealogy records through a no-auth hosted endpoint. | Open Archieven | ![MCP · Official](assets/badges/tags-mcp-official.svg) |
| [OpenTK MCP](https://github.com/r-huijts/opentk-mcp) | Query Tweede Kamer (Dutch parliament) debates, motions, and documents. | Tweede Kamer | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [Rijksmuseum MCP](https://github.com/r-huijts/rijksmuseum-mcp) | Search and browse the Rijksmuseum's art collection by artist, work, and theme. | Rijksmuseum | ![MCP · Community](assets/badges/tags-mcp-community.svg) |

---

_Curated — 80 listing(s) across 9 categories._

<!-- END CATALOGUE -->

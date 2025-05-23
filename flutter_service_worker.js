'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5e3f95d53afe89d2c7ef4cf03dbc2b7e",
"assets/AssetManifest.bin.json": "33791981b67289c1c81564848bf7dafa",
"assets/AssetManifest.json": "9ccf718518f6f2b539e5987379169ec6",
"assets/assets/earth.jpg": "3ab623665ab412f386c162bd29f0683a",
"assets/assets/images/board_1.png": "3953fb630b2b2f368601c643300f0c45",
"assets/assets/images/board_2.png": "8089b0ff9bd80829b090728bd398554c",
"assets/assets/images/board_3.png": "61e8ae3f2831d9927afef4bd350d1c70",
"assets/assets/images/cat.png": "8a38210f713019db2e1f6c00c3c5b6ca",
"assets/assets/images/cloud_deck.png": "d9cd280056e1eabafeda468213aca75f",
"assets/assets/images/cloud_deck_2.png": "8b39e4eabb3c4f0b9084c48487e3799b",
"assets/assets/images/earth.jpg": "3ab623665ab412f386c162bd29f0683a",
"assets/assets/images/facebook_logo.png": "4424e76cb46ed827b1a284be79c93f4d",
"assets/assets/images/filters.png": "6db9af3de35cca94e61869a5f80fe16e",
"assets/assets/images/find.svg": "e8d10c1ed5c428bf5fde7b33f56bb1e9",
"assets/assets/images/forgot_email.json": "12d134879a392b318ca27e455b1dddeb",
"assets/assets/images/forgot_email_2.json": "90f3aab5b9ef693a6a8163211a3da82a",
"assets/assets/images/forgot_password.json": "7b74570500ed9ead5f23f51189d515c3",
"assets/assets/images/full_star.png": "68bc4f8c13421fa3ce9be50b5c388683",
"assets/assets/images/gato.jpeg": "48dfc2596008889c9914867cf1465fd3",
"assets/assets/images/heart_filled.png": "f36ce89e9051f45850ed8e942df59cde",
"assets/assets/images/heart_outline.png": "05d601d70f50f570bd7bb5940cb94bab",
"assets/assets/images/home.svg": "46d373767465a0457158617e8ddf343f",
"assets/assets/images/hotwheels.png": "b94e17c6474f83ab29483b7827f6f356",
"assets/assets/images/icon_facebook.svg": "91c911fde8c8df4478e5f2dadaa2cc83",
"assets/assets/images/icon_find.png": "cc2520064432291c1693b2f05b519e27",
"assets/assets/images/icon_google.svg": "8027d4cc4cbd21a64fc1b48e161e73c2",
"assets/assets/images/icon_map.png": "1f329bf89b19acfdc0ebb9457bb9277b",
"assets/assets/images/icon_profile.png": "d54dc044770c3e1e27a3a79494db3de9",
"assets/assets/images/location.png": "66a2c475664c8c7c79ae88cd44360dd5",
"assets/assets/images/login.json": "930b4215027e1ea58aea6de8787a8420",
"assets/assets/images/logoGoogle%25202.png": "81cb77be41022d7ab735d00eac500cd2",
"assets/assets/images/Map.svg": "54be67f3ff188b461c8f3673d6fd5ae5",
"assets/assets/images/marco.png": "ef00b6add40b97dd3629eaede65b32cc",
"assets/assets/images/med_star.png": "d3b6e42a35ec631323bd757d20017a60",
"assets/assets/images/menu_bar.png": "feb864582d844923be6b9166b46cf430",
"assets/assets/images/message_have.png": "d793cea3f16da6406df433994b181613",
"assets/assets/images/message_none.png": "67a21d0881943f45532f25533b8a29ce",
"assets/assets/images/n64.png": "0a835a5e27488b623cb51dfbe8fc9163",
"assets/assets/images/none_star.png": "61088028ec7cf897668a5f85387ac7d6",
"assets/assets/images/onBoarding_1.svg": "9ba7d50468ea5c9312dedcef9ea3d56d",
"assets/assets/images/onBoarding_2.svg": "5759c27f00e97ad07cb04e22cd1669fb",
"assets/assets/images/onBoarding_3.svg": "ab59cf016d2b5004de2e3456eb4592aa",
"assets/assets/images/petly_launch.png": "50191e37dfa75c152eaaa9c82edf0782",
"assets/assets/images/petly_logo.png": "aba933a279eae39049a483f80e4e9ecd",
"assets/assets/images/petly_logo_blanco.png": "9e0a4de89ac7fe8e0c96a6ed0a0c5ad5",
"assets/assets/images/petly_logo_negro.png": "2d153bd8ad403b400096970868d567bc",
"assets/assets/images/pet_adoption.png": "76bd35fedf318a0be404612a4d171d85",
"assets/assets/images/pet_genders/female.png": "2e2e0b0506f7db71e6de0961f7919303",
"assets/assets/images/pet_genders/male.png": "b821f2b35ee906d8f3744c327e56133d",
"assets/assets/images/pet_types/cat.png": "e7bcbe24d079afca19411536d069c6b0",
"assets/assets/images/pet_types/dog.png": "40153995b4fe83a82262f8fe5bc3281e",
"assets/assets/images/pet_types/rabbit.png": "72c18964288f87018af71e3bfc3c012f",
"assets/assets/images/play_store_512.png": "a3d1d9c9b0a04194bf63449977cb2d6f",
"assets/assets/images/profile.svg": "5ba1f5d219e9cc33bb491ee951e385cb",
"assets/assets/images/psp.png": "1ca5f51773de305bc405083024d6adb3",
"assets/assets/images/psx.png": "6b09779ead9ef8034998267b3ec5a62d",
"assets/assets/images/qr.png": "1be06d186a27c4c6e1bf957c69a3dd3c",
"assets/assets/images/rappi_1.jpg": "8ec6707135003e16648908becd708d24",
"assets/assets/images/rappi_2.jpg": "ccb3573e5482a69acd9e4c3ba5e64920",
"assets/assets/images/rappi_3.jpg": "cd9e50195065084e1be06d5723432464",
"assets/assets/images/Rectangle%25202.png": "6d0b696993f5f65c2f8a23830d145c9a",
"assets/assets/images/refresh.riv": "5ec1c3cbd51750b6f62fca6150ad2572",
"assets/assets/images/search.png": "65f816de73c876844377d2ff2773cb63",
"assets/assets/images/todos_login.png": "e65246320141b9c9df87b4f0e3fe06d2",
"assets/assets/images/vet_pet.png": "519146109e0a0dc473c136d67c94b90b",
"assets/assets/lotties/cine.json": "64b71b9cadee49de5c2942fef8a91e41",
"assets/assets/lotties/controller.json": "848de96dc80e6a12cc8f8301af7b9560",
"assets/assets/lotties/couple.json": "6d6f75ce879218c8ea0d5ed2e5abebf8",
"assets/assets/lotties/deliver.json": "c434dd519b4fbed0317b2381975fb050",
"assets/assets/lotties/heart.json": "2be0028e793c325de4c192ffe64f0d31",
"assets/assets/lotties/machine.json": "a5cbe315a51a434cf9274dd4a2c0a1bf",
"assets/assets/lotties/no_menu.json": "46849cb1959d77be91b205f73b3e53a9",
"assets/assets/lotties/pacman.json": "321781b552556c322e015abf4e15466a",
"assets/assets/lotties/pay_for.json": "9128af9f45657f25ea65c57199145640",
"assets/assets/lotties/phone.json": "d14ac928f0d46483028d6378bd8b3ed8",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "62ef073ef4d7737fb1ff188846170d60",
"assets/games.json": "e2631529ab5233ec2fb77a99feade88d",
"assets/NOTICES": "fbe9c4588dafcdb760cedd020de3d39b",
"assets/packages/circle_flags/assets/svg/ac.svg": "de8950014e78f337c31085c8d8060d08",
"assets/packages/circle_flags/assets/svg/ad.svg": "f07f4ebc86a1a08e7e2519bda186f4f2",
"assets/packages/circle_flags/assets/svg/ae.svg": "dfeb0f940880884d11f30ebceef464be",
"assets/packages/circle_flags/assets/svg/af.svg": "5ce6cd72be6763228940e78d13e2cac4",
"assets/packages/circle_flags/assets/svg/ag.svg": "f6b94a14908089d1b31c735263b0d974",
"assets/packages/circle_flags/assets/svg/ai.svg": "5aac6128fd2bcd59469ad4dbd0e66a6f",
"assets/packages/circle_flags/assets/svg/al.svg": "244afce9ac99c9f215ec7d4aa16dacd5",
"assets/packages/circle_flags/assets/svg/am.svg": "3367445df6aacf4268a867f54b2aa012",
"assets/packages/circle_flags/assets/svg/ao.svg": "5b8624837922c3b279072b0b1cf3c43d",
"assets/packages/circle_flags/assets/svg/ar.svg": "50bcaaec8c29006da8cabe0b097d9847",
"assets/packages/circle_flags/assets/svg/as.svg": "b4518f6b67ef5bf611f4c0941ea0cf57",
"assets/packages/circle_flags/assets/svg/at.svg": "33d39054f5c40c9e8c404101ccbc2aa6",
"assets/packages/circle_flags/assets/svg/au.svg": "b966d328a46774f56be26905f9eb9684",
"assets/packages/circle_flags/assets/svg/aw.svg": "d536ae24c11b08eef9efea4af5a1ec81",
"assets/packages/circle_flags/assets/svg/ax.svg": "8716c282b286147ac7d899c2278c8fb2",
"assets/packages/circle_flags/assets/svg/az.svg": "93d4994bf0c2670aea991618878b0688",
"assets/packages/circle_flags/assets/svg/ba.svg": "f92494b7a31b30b018c0e8bcfa5690b1",
"assets/packages/circle_flags/assets/svg/bb.svg": "1db266d702c39d521b38ef7578e89cee",
"assets/packages/circle_flags/assets/svg/bd.svg": "33b0d66b6977a92a2b833435cd53d44a",
"assets/packages/circle_flags/assets/svg/be.svg": "63fd03cf723a8df27f5a8156dc68f681",
"assets/packages/circle_flags/assets/svg/bf.svg": "0679153f1422163537878563d8a0c6a4",
"assets/packages/circle_flags/assets/svg/bg.svg": "0ef89f3e55e045c1e8e956c2a96da4ff",
"assets/packages/circle_flags/assets/svg/bh.svg": "4bc0dacd5d4dc23475bb441fd603bdd4",
"assets/packages/circle_flags/assets/svg/bi.svg": "761c83b881740e9c5109e0e5c6991828",
"assets/packages/circle_flags/assets/svg/bj.svg": "2c32c62ebc5036ce3d23b75b70b4d884",
"assets/packages/circle_flags/assets/svg/bl.svg": "30d6b24e5f6fba4700ff7ad7498e44aa",
"assets/packages/circle_flags/assets/svg/bm.svg": "65034eeae3ddbbdb27d4afa32f40a512",
"assets/packages/circle_flags/assets/svg/bn.svg": "b463ac712d6e450623473a6352f82e2d",
"assets/packages/circle_flags/assets/svg/bo.svg": "2d373f6e99d7f6e1efa9b0d5dc76bffa",
"assets/packages/circle_flags/assets/svg/bq.svg": "c82fc5a3b87c0f6a406b4162aadab3be",
"assets/packages/circle_flags/assets/svg/br.svg": "057f3318ec8094abfc02d746d78f167a",
"assets/packages/circle_flags/assets/svg/bs.svg": "048f207088030e3c33408b18b4d40a0b",
"assets/packages/circle_flags/assets/svg/bt.svg": "c81d52f9807fa65b6be80c2266e91986",
"assets/packages/circle_flags/assets/svg/bw.svg": "9a7528b95cea43526a82c052154e60fe",
"assets/packages/circle_flags/assets/svg/by.svg": "58ae33e6909cf72dbb9fd53faac7470f",
"assets/packages/circle_flags/assets/svg/bz.svg": "cbbe4ee809c535c1a329174cd5ee7f76",
"assets/packages/circle_flags/assets/svg/ca.svg": "42c61d70587393fa5270d4addab566a6",
"assets/packages/circle_flags/assets/svg/cc.svg": "1014990dcff05b48e7792292475828c5",
"assets/packages/circle_flags/assets/svg/cd.svg": "ad03efd05727acf3f5ea5b0b59266454",
"assets/packages/circle_flags/assets/svg/cf.svg": "2255e54e479952ea56392f831b8abfd1",
"assets/packages/circle_flags/assets/svg/cg.svg": "6344c3632f30626a6fd5d531e693370e",
"assets/packages/circle_flags/assets/svg/ch.svg": "f45a7dbf12930ac8ef8e9db2123feda5",
"assets/packages/circle_flags/assets/svg/ci.svg": "f385ab70102fc72a5cc57c67549471a7",
"assets/packages/circle_flags/assets/svg/ck.svg": "15edfdba417e001d539be7ef3ba40198",
"assets/packages/circle_flags/assets/svg/cl.svg": "dfe5e4b9ad7f02d4196be54274b274c7",
"assets/packages/circle_flags/assets/svg/cm.svg": "5ef78df88525c24662ba4535bae29058",
"assets/packages/circle_flags/assets/svg/cn.svg": "daa4b5a7e549d7f7897e5101f6dc5131",
"assets/packages/circle_flags/assets/svg/co.svg": "27b71dc72631d9205fe646448225fed5",
"assets/packages/circle_flags/assets/svg/cr.svg": "2c8a0b157da53116fa90ba3424e7a386",
"assets/packages/circle_flags/assets/svg/cu.svg": "ced5bf8d4a51d9162a5d3e19d9f6545e",
"assets/packages/circle_flags/assets/svg/cv.svg": "4e54347bc13d4298ba84b506b4ba8366",
"assets/packages/circle_flags/assets/svg/cw.svg": "c7547a00007b79ed1156fccbf3c0ec18",
"assets/packages/circle_flags/assets/svg/cx.svg": "95acc8ce21028d1403d65ee141f34e5e",
"assets/packages/circle_flags/assets/svg/cy.svg": "170c71c5823c032c337bc380a2119c00",
"assets/packages/circle_flags/assets/svg/cz.svg": "591673eebdcf515f5d5508add0fc009a",
"assets/packages/circle_flags/assets/svg/de.svg": "e5476a0d42d2c69a20fa0ec8decaed25",
"assets/packages/circle_flags/assets/svg/dj.svg": "1ae4c0f6d4facad34075252f928a0a82",
"assets/packages/circle_flags/assets/svg/dk.svg": "37a1865895f22ddb0f0e1bd2970cf2c9",
"assets/packages/circle_flags/assets/svg/dm.svg": "f03d42f0847440b58d374f7a04bc3ae6",
"assets/packages/circle_flags/assets/svg/do.svg": "c33b8d86bff9429da9d8a3eb4f71d745",
"assets/packages/circle_flags/assets/svg/dz.svg": "300c399075a5a11f90917c766f6a8566",
"assets/packages/circle_flags/assets/svg/ec.svg": "0775eb34f8776aa2deb27a4ee07f696c",
"assets/packages/circle_flags/assets/svg/ee.svg": "e24b6ca0aca558b3fc1374f9f248b1e2",
"assets/packages/circle_flags/assets/svg/eg.svg": "662494cb6796d70cc87c894c3bc17bcd",
"assets/packages/circle_flags/assets/svg/eh.svg": "bbe5c30ffe639317af1fd28b7ceae57b",
"assets/packages/circle_flags/assets/svg/er.svg": "d7790c413c20478a2d03f83c5536fc6b",
"assets/packages/circle_flags/assets/svg/es.svg": "2b7627ca6bb2aacc572bc37f4a81c7f3",
"assets/packages/circle_flags/assets/svg/et.svg": "0dc00578ef7b9517ab80907ed7be589c",
"assets/packages/circle_flags/assets/svg/fi.svg": "475a737ec7729f15bea4b9c389a5314f",
"assets/packages/circle_flags/assets/svg/fj.svg": "7e97c105aef6cfb947821c2794b9cc15",
"assets/packages/circle_flags/assets/svg/fk.svg": "f287bd407dbc5555fd8c89946ffe8cc3",
"assets/packages/circle_flags/assets/svg/fm.svg": "eeaa12a27ba022219aa7a10f9a033335",
"assets/packages/circle_flags/assets/svg/fo.svg": "275f04c86752a8eba6df22d6a87d8e95",
"assets/packages/circle_flags/assets/svg/fr.svg": "dc3c45c4e531d31397b4b378354d476c",
"assets/packages/circle_flags/assets/svg/ga.svg": "3f4840cd3d3fb99ab3cc74a75708904c",
"assets/packages/circle_flags/assets/svg/gb.svg": "c2c3cadcc5b107aaaee8df05b7811921",
"assets/packages/circle_flags/assets/svg/gd.svg": "b5e51c48e573d662975a545d020dc781",
"assets/packages/circle_flags/assets/svg/ge.svg": "d2a986b5d09e6315c142fe360bb676e4",
"assets/packages/circle_flags/assets/svg/gf.svg": "eb540a337988046574ce8c208ea11973",
"assets/packages/circle_flags/assets/svg/gg.svg": "7d311b0411753c514db2915acb61e4cc",
"assets/packages/circle_flags/assets/svg/gh.svg": "b732d1fe295ded76c447aa57902b9cc0",
"assets/packages/circle_flags/assets/svg/gi.svg": "fb52d8c2f2f4a837c89eb26a236c7813",
"assets/packages/circle_flags/assets/svg/gl.svg": "3fd508ebb8ba5c86100a1d92ea969803",
"assets/packages/circle_flags/assets/svg/gm.svg": "e00cacd6dcf7f6b4a1c1caea6adf78d7",
"assets/packages/circle_flags/assets/svg/gn.svg": "3f4a6d5a0b32d69bb017ec9d0aed3434",
"assets/packages/circle_flags/assets/svg/gp.svg": "4a13339fdb87a1ea1a22b24b7d5618a5",
"assets/packages/circle_flags/assets/svg/gq.svg": "3a66a4a1b1012779615b403b8aca16c4",
"assets/packages/circle_flags/assets/svg/gr.svg": "760ef5113334e1192295868a53ee7abc",
"assets/packages/circle_flags/assets/svg/gt.svg": "c9385b061ee36b46006e063311c0d6b8",
"assets/packages/circle_flags/assets/svg/gu.svg": "10a27bf1ee22883065bb085fb20fb893",
"assets/packages/circle_flags/assets/svg/gw.svg": "ac71ef8446359525384399df8439c59e",
"assets/packages/circle_flags/assets/svg/gy.svg": "3ac8d8fb43731497a59c3be6671efde5",
"assets/packages/circle_flags/assets/svg/hk.svg": "7667be2ebe66da6b43405536358a48dc",
"assets/packages/circle_flags/assets/svg/hn.svg": "94abe2f41dbab8b161a979077d336d93",
"assets/packages/circle_flags/assets/svg/hr.svg": "3c3cb4e0bb504066e5607df14d1f3b43",
"assets/packages/circle_flags/assets/svg/ht.svg": "83223775ec37213f37d3b1c5599f9edd",
"assets/packages/circle_flags/assets/svg/hu.svg": "8f4c390339a02ee646bf06a7d3977502",
"assets/packages/circle_flags/assets/svg/id.svg": "29d7dbd5af98200ee68517c4be6b94f0",
"assets/packages/circle_flags/assets/svg/ie.svg": "7b659f5a5c6fc721750da5e95edd10d3",
"assets/packages/circle_flags/assets/svg/il.svg": "1243ac49f28c1f43856bbcf2d648af53",
"assets/packages/circle_flags/assets/svg/im.svg": "f7e83cac25acaffcd543c34025c3d1f1",
"assets/packages/circle_flags/assets/svg/in.svg": "51112aca8b3e19c68fce3bc46f67f19d",
"assets/packages/circle_flags/assets/svg/io.svg": "3d2c2aa39a63427d98f7c4f963a699d4",
"assets/packages/circle_flags/assets/svg/iq.svg": "0885ff7d2ac292fcd7cdd5dacef7f4e4",
"assets/packages/circle_flags/assets/svg/ir.svg": "9219b4a55203ac0d093b4af13728e384",
"assets/packages/circle_flags/assets/svg/is.svg": "9e18eabf2cdfada2761be0d08414f937",
"assets/packages/circle_flags/assets/svg/it.svg": "ff40703386d1ce5dcb6f44732809e56f",
"assets/packages/circle_flags/assets/svg/je.svg": "db9c6cf00b28c9b3f6c54b2753835364",
"assets/packages/circle_flags/assets/svg/jm.svg": "9d4a1bc69652a0e9c4eb657be8224793",
"assets/packages/circle_flags/assets/svg/jo.svg": "837db7446e42e59431d8f9a3bb7ff6b0",
"assets/packages/circle_flags/assets/svg/jp.svg": "be04fd894b0d6e13a16ec1bb874b74e2",
"assets/packages/circle_flags/assets/svg/ke.svg": "c0bf589a9511a36bea87979ee4c1c3d1",
"assets/packages/circle_flags/assets/svg/kg.svg": "a92b7300128c8005e1109ee88f0619b8",
"assets/packages/circle_flags/assets/svg/kh.svg": "3a7a7d57d2692b90ec3663b258211ba0",
"assets/packages/circle_flags/assets/svg/ki.svg": "28e34a8854062dea9cb2784882b84631",
"assets/packages/circle_flags/assets/svg/km.svg": "4a12bb178db2290729910f61273aeff7",
"assets/packages/circle_flags/assets/svg/kn.svg": "0edddebdd0296d4a86e51310d1940a3b",
"assets/packages/circle_flags/assets/svg/kp.svg": "32070bf9c925fbd1a945013d4056987e",
"assets/packages/circle_flags/assets/svg/kr.svg": "df2ac430f855e8906b0f499caeb73689",
"assets/packages/circle_flags/assets/svg/kw.svg": "f236070f2b656334445a684af35fa9be",
"assets/packages/circle_flags/assets/svg/ky.svg": "144850afa8deb943b589b0cf6341ab4f",
"assets/packages/circle_flags/assets/svg/kz.svg": "3d973b6d79281a3fb5b92f1c5a560ecd",
"assets/packages/circle_flags/assets/svg/la.svg": "c86fffbfeb449e1b591d859528de4129",
"assets/packages/circle_flags/assets/svg/lb.svg": "107c3be9d99f0b4c4ed4f9933d383928",
"assets/packages/circle_flags/assets/svg/lc.svg": "82209f2ebd1e1ecba8d68194d8c4cda3",
"assets/packages/circle_flags/assets/svg/li.svg": "535b82bf7e54c3f803e1416c665e00e9",
"assets/packages/circle_flags/assets/svg/lk.svg": "9e0e66b47d769e0debc739a9a887d09e",
"assets/packages/circle_flags/assets/svg/lr.svg": "03762e2d6b0bc5ec8323aa28ef04a9a8",
"assets/packages/circle_flags/assets/svg/ls.svg": "fa89864d6c4c887dbcce727bc039687b",
"assets/packages/circle_flags/assets/svg/lt.svg": "793eda52fd8268ea8c2a0ba876fcbbb5",
"assets/packages/circle_flags/assets/svg/lu.svg": "8a3f8c988859932862f9047865bbde39",
"assets/packages/circle_flags/assets/svg/lv.svg": "9697c1c57eea9b2b50ed6761e7cbdefb",
"assets/packages/circle_flags/assets/svg/ly.svg": "df3155b98edf6e141f67663c2ffaf352",
"assets/packages/circle_flags/assets/svg/ma.svg": "f90e3f47b004e4c1779db659b5522e13",
"assets/packages/circle_flags/assets/svg/mc.svg": "5b037c6b61701ec8cef7f4ba22ee297a",
"assets/packages/circle_flags/assets/svg/md.svg": "667635e5a977946f3c551db63d2f6688",
"assets/packages/circle_flags/assets/svg/me.svg": "420389a18960efd3be2aed0147e49791",
"assets/packages/circle_flags/assets/svg/mf.svg": "532e1d9074c6f8a8d8cc33ca5398175f",
"assets/packages/circle_flags/assets/svg/mg.svg": "8785f8d07da272f1fec074ac178ace2f",
"assets/packages/circle_flags/assets/svg/mh.svg": "ec211b569617b17afabd8e1b93df9338",
"assets/packages/circle_flags/assets/svg/mk.svg": "8e28b928e1f35b8077b91e10f790dd0e",
"assets/packages/circle_flags/assets/svg/ml.svg": "0fdff6d2b13f77160baccea393413240",
"assets/packages/circle_flags/assets/svg/mm.svg": "e1e9937625af45d6d6c72e0b02084123",
"assets/packages/circle_flags/assets/svg/mn.svg": "ab522741021a33c88f45a1d2b0d9ac50",
"assets/packages/circle_flags/assets/svg/mo.svg": "a829e8877bcb790849dd4c682fbdfd39",
"assets/packages/circle_flags/assets/svg/mp.svg": "e5069541bb00466ebfc37bbebfed0ee1",
"assets/packages/circle_flags/assets/svg/mq.svg": "1f9641d6b865064a1ae437be9cea677d",
"assets/packages/circle_flags/assets/svg/mr.svg": "c94614cf0ac44e46ee110c4f1f942f4e",
"assets/packages/circle_flags/assets/svg/ms.svg": "df1f038bfc3b34bdbb3522d3dd3bc4fa",
"assets/packages/circle_flags/assets/svg/mt.svg": "80ed8eed583102ce3f4dd021a779069c",
"assets/packages/circle_flags/assets/svg/mu.svg": "e7b1ed616794d3825927189f83d19328",
"assets/packages/circle_flags/assets/svg/mv.svg": "e96351fd6c8807774d96f08d1e84933c",
"assets/packages/circle_flags/assets/svg/mw.svg": "821bfec12652e2deb9ed052774e93a50",
"assets/packages/circle_flags/assets/svg/mx.svg": "3ec0ef90ee44d55257594e5b320af639",
"assets/packages/circle_flags/assets/svg/my.svg": "af3c3e9b290175550cb7a19b7721ccb5",
"assets/packages/circle_flags/assets/svg/mz.svg": "f104942234e651bf0c8ebca00ff5ae29",
"assets/packages/circle_flags/assets/svg/na.svg": "d1ebb4bd2c2097be74d64f8882d6997e",
"assets/packages/circle_flags/assets/svg/nc.svg": "dfbc2084830be0845f4c6f687f8c6aaa",
"assets/packages/circle_flags/assets/svg/ne.svg": "f1c7f30e78f7dc79467fbed3d77fd564",
"assets/packages/circle_flags/assets/svg/nf.svg": "de87d19a53de5f067e61d1b7b442b05b",
"assets/packages/circle_flags/assets/svg/ng.svg": "9d60aa0d417e613d03cde8413545528d",
"assets/packages/circle_flags/assets/svg/ni.svg": "704a21bf8b7aaec1f3e004ff27f8166d",
"assets/packages/circle_flags/assets/svg/nl.svg": "ee9b0bd34dd0925a7fb75bdb10028e55",
"assets/packages/circle_flags/assets/svg/no.svg": "6ad5392835cd9033852886113806ede5",
"assets/packages/circle_flags/assets/svg/np.svg": "1452f3dc94aabc6adf348d364d3c9e2a",
"assets/packages/circle_flags/assets/svg/nr.svg": "df32b38fbd580e6a47dd2df18c8b7165",
"assets/packages/circle_flags/assets/svg/nu.svg": "bf9cb836af31fab2773c60bee593b6e4",
"assets/packages/circle_flags/assets/svg/nz.svg": "e7d2be7eedbe08c3c6f9e1fce5d9db44",
"assets/packages/circle_flags/assets/svg/om.svg": "957fa2cc624a8264e6335f7fb2d94dad",
"assets/packages/circle_flags/assets/svg/pa.svg": "9904c98ff645a433a5865a46069e3fb0",
"assets/packages/circle_flags/assets/svg/pe.svg": "c96225a37b5c24767640100c52467d5d",
"assets/packages/circle_flags/assets/svg/pf.svg": "3910f57f54c84b2a3b023c6a780379de",
"assets/packages/circle_flags/assets/svg/pg.svg": "c7c6415305f2bca597407a9d9444ce44",
"assets/packages/circle_flags/assets/svg/ph.svg": "ba804bbacdfd3c3b99fe06f8e70f160e",
"assets/packages/circle_flags/assets/svg/pk.svg": "8e1b819cec9ac503c212583bcfdbbb0b",
"assets/packages/circle_flags/assets/svg/pl.svg": "dab68e3036fcb93a86f919d80839319c",
"assets/packages/circle_flags/assets/svg/pm.svg": "67e1110099471ea06b5002b3f6151ae1",
"assets/packages/circle_flags/assets/svg/pr.svg": "29878f1db3675601456fe9779e4f35b4",
"assets/packages/circle_flags/assets/svg/ps.svg": "67375bb499ccff93536d537071ef86f7",
"assets/packages/circle_flags/assets/svg/pt.svg": "abc9ef40c1b2ff65bc0ad80affd10788",
"assets/packages/circle_flags/assets/svg/pw.svg": "9e79308401c325a3f3c76807f80130e7",
"assets/packages/circle_flags/assets/svg/py.svg": "bb1899d3a8c7fb2c2ae0b8495b093fad",
"assets/packages/circle_flags/assets/svg/qa.svg": "97b9b44e33ccbbe459a0e3fda97d9f18",
"assets/packages/circle_flags/assets/svg/re.svg": "1ffe3e405cef9bc34268edede7d5f9a4",
"assets/packages/circle_flags/assets/svg/ro.svg": "feb88609ec1d6966b5ac0cffb888cef0",
"assets/packages/circle_flags/assets/svg/rs.svg": "437d85037d8ba5d4e4158b085687a5d8",
"assets/packages/circle_flags/assets/svg/ru.svg": "083dca98f3cebfd6bcc2471c60e2748a",
"assets/packages/circle_flags/assets/svg/rw.svg": "408bebb0110eca4e236ce302ef3688d1",
"assets/packages/circle_flags/assets/svg/sa.svg": "6a6a776e6eafd7894a15b59489d256e0",
"assets/packages/circle_flags/assets/svg/sb.svg": "b3481d949279ba4bfabe1ab5b64ce61c",
"assets/packages/circle_flags/assets/svg/sc.svg": "bc08a6b5a14fc42c3b05d519ec6f810b",
"assets/packages/circle_flags/assets/svg/sd.svg": "3aa7c54abc6030365f7aaa3066358463",
"assets/packages/circle_flags/assets/svg/se.svg": "01887b79a05dc88a4c59f3dc8ce2bf97",
"assets/packages/circle_flags/assets/svg/sg.svg": "ac975d1a1ef9f8a921c84454b401c9ef",
"assets/packages/circle_flags/assets/svg/sh.svg": "9777e158e3729ef5315f2b1edd9ce54d",
"assets/packages/circle_flags/assets/svg/si.svg": "5a0703e0bb6f28f989a35fe00a516c58",
"assets/packages/circle_flags/assets/svg/sj.svg": "6ad5392835cd9033852886113806ede5",
"assets/packages/circle_flags/assets/svg/sk.svg": "7365349f3806a60924ce1cd75d159a5b",
"assets/packages/circle_flags/assets/svg/sl.svg": "b40874c7aad54ff1696b0c1828611780",
"assets/packages/circle_flags/assets/svg/sm.svg": "eb21fa05f80a74793fb8d96c7b792b5a",
"assets/packages/circle_flags/assets/svg/sn.svg": "21c497e852ad41952ec941687c43ebef",
"assets/packages/circle_flags/assets/svg/so.svg": "ba052f96bb8187d86389a0ec479be9c7",
"assets/packages/circle_flags/assets/svg/sr.svg": "183a9e40141ef7a6c92f9bbbb8144385",
"assets/packages/circle_flags/assets/svg/ss.svg": "08d2cc41f7a06cd7cb436886eec9a9bc",
"assets/packages/circle_flags/assets/svg/st.svg": "1403f2d22c59133494fd9ebe2ddff95a",
"assets/packages/circle_flags/assets/svg/sv.svg": "e78b64970f591854b6087c6a92ae9134",
"assets/packages/circle_flags/assets/svg/sx.svg": "1228f6668ea3b3c79d212bdeb4b44e3c",
"assets/packages/circle_flags/assets/svg/sy.svg": "366d1ac83c492cb1835ff481f6a1bc65",
"assets/packages/circle_flags/assets/svg/sz.svg": "287333f40e1b6e6705160c45a4331253",
"assets/packages/circle_flags/assets/svg/ta.svg": "f9539d1fb279ec2b7db591506883354f",
"assets/packages/circle_flags/assets/svg/tc.svg": "c93e03305fc3d3f75376a240ab3056ca",
"assets/packages/circle_flags/assets/svg/td.svg": "a5bcfd6e4600975b44cadd15dc1cd416",
"assets/packages/circle_flags/assets/svg/tg.svg": "b40b5851491758034b1292a1b6e7d7ef",
"assets/packages/circle_flags/assets/svg/th.svg": "f213dbbef7b45a13ca72862af6e662d3",
"assets/packages/circle_flags/assets/svg/tj.svg": "6f83dc6a5c45754ec89e5ed62aea63e6",
"assets/packages/circle_flags/assets/svg/tk.svg": "9a878bbfb0db8d0535d7975dcb5a0a13",
"assets/packages/circle_flags/assets/svg/tl.svg": "1b22495b503f1e441453badb9f4f4845",
"assets/packages/circle_flags/assets/svg/tm.svg": "b792aa429b9486d200810ee496f6dc7e",
"assets/packages/circle_flags/assets/svg/tn.svg": "5c013018d4d863aa7928a5d94a16e287",
"assets/packages/circle_flags/assets/svg/to.svg": "5cba98ad640082174f6bdceeb622decf",
"assets/packages/circle_flags/assets/svg/tr.svg": "b4a158322e521d3a0ec446c0fbd07ca0",
"assets/packages/circle_flags/assets/svg/tt.svg": "ee80b6dceb1902699c325854e3a3b34f",
"assets/packages/circle_flags/assets/svg/tv.svg": "6c6bdb16922358702bfb90e7fe0d56ee",
"assets/packages/circle_flags/assets/svg/tw.svg": "a86d62f630dda0be1371bd6aecc9d94d",
"assets/packages/circle_flags/assets/svg/tz.svg": "77bf1703cfb0a28378ff5cde4f18bed9",
"assets/packages/circle_flags/assets/svg/ua.svg": "6ef59119c38bc5e1eb860bd17fdfa84b",
"assets/packages/circle_flags/assets/svg/ug.svg": "abab7fff91573ff833850f9d8b42f1e1",
"assets/packages/circle_flags/assets/svg/us.svg": "a1454bbb5b13a30a70af5851b3aaa8a4",
"assets/packages/circle_flags/assets/svg/uy.svg": "6720b2e47fdadc2c3921cd44e05689aa",
"assets/packages/circle_flags/assets/svg/uz.svg": "2c99360b398906120f6265a5a5915c36",
"assets/packages/circle_flags/assets/svg/va.svg": "318a1d440787a98ce584119691a6021d",
"assets/packages/circle_flags/assets/svg/vc.svg": "a390bb4bdfc51827b0c2b66f3fd9e881",
"assets/packages/circle_flags/assets/svg/ve.svg": "6f3250ea4752641871f933f0c98cfba1",
"assets/packages/circle_flags/assets/svg/vg.svg": "e4b5415e4c9d5f8f9a89ff645b1f3fc7",
"assets/packages/circle_flags/assets/svg/vi.svg": "c7208ad93d7db9f0fabb8989bdebe555",
"assets/packages/circle_flags/assets/svg/vn.svg": "4bc2a5601a76d831d6d55ea857f8b4c6",
"assets/packages/circle_flags/assets/svg/vu.svg": "e2349f70ba865da34faf0e3f0502af3c",
"assets/packages/circle_flags/assets/svg/wf.svg": "ea5aa6c3d745bc9e5bc4e62c37da4931",
"assets/packages/circle_flags/assets/svg/ws.svg": "e03072bc05344ccd2fea95e8f8cc63cc",
"assets/packages/circle_flags/assets/svg/xk.svg": "a4f5eed93152605396ad671ef5b91a56",
"assets/packages/circle_flags/assets/svg/xx.svg": "30e54fd1cff28263dfa2ea82a9d5de7b",
"assets/packages/circle_flags/assets/svg/ye.svg": "c8aadcdaab6af181bcfc4d0d79b2f7e2",
"assets/packages/circle_flags/assets/svg/yt.svg": "226d5728915c117e646d8c96bf0ee908",
"assets/packages/circle_flags/assets/svg/za.svg": "855c9dc1f5bb5efe1b1a3f4f3a71a316",
"assets/packages/circle_flags/assets/svg/zm.svg": "f6c0ef98ed3bbce0d3383c35217256f0",
"assets/packages/circle_flags/assets/svg/zw.svg": "76db6ed54a43d69822a861e69eff055d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/web/assets/games.json": "e2631529ab5233ec2fb77a99feade88d",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "19e8353469f10a0e7672554544f33f83",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bd3b5b2f481b6bea58da149fd1983e24",
"/": "bd3b5b2f481b6bea58da149fd1983e24",
"main.dart.js": "97efe6db435618df36401e87ac974219",
"manifest.json": "4c7eb3f27fdf0eb0d5a871bf587d393d",
"splash/img/dark-1x.png": "ab7e7d008628274d05ffe904e98760dd",
"splash/img/dark-2x.png": "1de78dfb47eb04895c2e29bc96449742",
"splash/img/dark-3x.png": "ad228eec4b096c682b2c0c87c7f26aa6",
"splash/img/dark-4x.png": "850214a57184c46abe566819d75a8606",
"splash/img/light-1x.png": "ab7e7d008628274d05ffe904e98760dd",
"splash/img/light-2x.png": "1de78dfb47eb04895c2e29bc96449742",
"splash/img/light-3x.png": "ad228eec4b096c682b2c0c87c7f26aa6",
"splash/img/light-4x.png": "850214a57184c46abe566819d75a8606",
"version.json": "05d5e77fadcec37aaba333a73507abd2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

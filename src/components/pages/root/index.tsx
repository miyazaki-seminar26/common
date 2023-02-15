// eslint-disable-next-line import/no-extraneous-dependencies
import { Carousel } from '@mantine/carousel';
import {
  Accordion,
  Box,
  Divider,
  Flex,
  Image,
  List,
  SimpleGrid,
  Space,
  Text,
} from '@mantine/core';
import type { FC } from 'react';

import { BoxWithTitle } from '@/components/common/BoxWithTitle';
import { CategoryCard } from '@/components/common/CategoryCard';
import { categoryList } from '@/constants/category-list';

export const Root: FC = () => {
  return (
    <>
      <Box>
        <Text>
          家があること・家族がいること・学校に行けること。私たちの生活には、いろいろな
          <span className="font-bold">「当たり前」</span>が潜んでいます。
        </Text>
        <Text>でも、『それって本当に当たり前ですか？』</Text>
        <Text>そんな疑問を持つ方の手助けとなることを願って。</Text>
      </Box>

      <Space h="xl" />

      <Box>
        <Text weight="bold">
          私たち、同志社大学宮崎ゼミ26期は
          <br />
          何か確信的なことを起こすには、今までになかったもの、つまり「seeds」を探し出し当たり前を覆すようなことだと考えました。
        </Text>
      </Box>
      <Space h="xl" />
      <Divider />

      <Space h={40} />

      <BoxWithTitle title="本論">
        <div className="break-words">
          <Accordion defaultValue="customization" variant="filled">
            <Accordion.Item value="検証の流れ・方法">
              <Accordion.Control>
                <Text weight="bold">検証の流れ・方法</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <List listStyleType="number" className="break-words">
                  <List.Item>
                    先生からの宿題
                    <List>
                      <List.Item>各個人で10個の当たり前について提示</List.Item>
                    </List>
                  </List.Item>
                  <List.Item>
                    グループ活動
                    <List>
                      <List.Item>
                        4人×6グループに分かれて当たり前について考察
                      </List.Item>
                    </List>
                  </List.Item>
                  <List.Item>
                    結論へのアプローチ
                    <List listStyleType="disc">
                      <List.Item>具体→抽象</List.Item>
                      <List.Item>
                        各班で当たり前の項目を出す際の大枠であるコンテンツを決める
                      </List.Item>
                      <List.Item>
                        コンテンツ内の当たり前について共通認識であるか確認
                      </List.Item>
                      <List.Item>
                        当たり前の度合いをグラデーション状に並べる
                      </List.Item>
                      <List.Item>
                        全員一致の当たり前について、共通性から新しく抽象化をする
                      </List.Item>
                      <List.Item>
                        ☆当たり前の項目を挙げたうえで共通部分を見つける方法
                      </List.Item>
                    </List>
                  </List.Item>
                  <List.Item>結論の定義とコンテンツの作成</List.Item>
                  <List.Item>
                    2つの方法に分かれて分析
                    <List listStyleType="disc">
                      異なる方法からでも同じ答えにたどり着けるのかを確認するために二通りの方法に分けて当たり前について分析
                      <List.Item>抽象→具体</List.Item>
                      <List.Item>各班であたりまえの（仮）定義する</List.Item>
                      <List.Item>
                        その定義が正しいのかを検証、議論する
                      </List.Item>
                      <List.Item>
                        その検証の結論をだす この一連の流れを繰り返す
                      </List.Item>
                    </List>
                  </List.Item>
                </List>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="シーズを見つける意義・方法">
              <Accordion.Control>
                <Text weight="bold">シーズを見つける意義・方法</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  まだ見ぬ需要を作り出すために必要なこととはなんでしょうか。
                  <br />
                  これまでの当たり前を覆すようなアイデアの種であり、何もないところから新たな価値を作り出すことが「seeds」です。
                  <br />
                  seedsを見つけるためには、当たり前を見つめ直すことが重要となります。本をネット上で読めるようにすることは誰でも思いつくことです。
                  <br />
                  私たちは宮崎ゼミ生です。「ITがわかるビジネスパーソン」としては目に見える（顕在的な）当たり前と、意識しない（潜在的な）当たり前のうち、潜在的な当たり前をseedsとすることで核心的な価値を想像していきます。
                  <br />
                  これから必要なのは当たり前に注目してseedsを見つける姿勢です。
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <List listStyleType="number" className="w-11/12">
            ☆考えうる当たり前の定義を複数あげて検証することを繰り返す
            <List.Item>
              コンテンツの再定義
              <List>
                <List.Item>
                  グループごとの当たり前のコンテンツの大きさを統一
                </List.Item>
              </List>
            </List.Item>
            <List.Item>
              2次元化→3次元化
              <List listStyleType="disc">
                <List.Item>当たり前の物事を時間軸で見て考える</List.Item>
                <List.Item>
                  当たり前として普及され始めた期間や年数がカテゴリの中でも違うので、そこを時間軸(3次元化)
                  で考えて比較した
                </List.Item>
              </List>
            </List.Item>
          </List>
        </div>
      </BoxWithTitle>

      <Space h={40} />

      <BoxWithTitle title="結論">
        <>
          <Text weight="bold">作成モデル</Text>
          <Text>
            当たり前の物事を、時間軸(Z軸)で捉えて、3次元化したモデルを作成しました。
            <br />
            <Text color="gray" size="sm">
              当たり前として普及し始めた時を起点として、受け入れられている期間が長いほど、時間軸(Z軸)は長くなります。
              0年をO(原点)、2023年現在を一番上の目盛りとして、普遍化された物事の年数をZ軸の長さで比較しました。
              ※0年以前(紀元前)に始まったことは、マイナス軸を起点とします。
            </Text>
          </Text>
          <Divider />
          <Flex>
            <Box w={'40%'} p={8}>
              <Image src={'/images/ThreeDModel.svg'} alt="3次元化モデル" />
            </Box>
            <Box w={'60%'} pl={20} py={8}>
              <List>
                <List.Item>
                  娯楽
                  <List withPadding>
                    <List.Item>
                      <Text>
                        <span className="text-cyan-400">①</span>
                        人生の活力になる
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text>
                        <span className="text-cyan-400">②</span>
                        心が豊かになるもの
                      </Text>
                    </List.Item>
                  </List>
                </List.Item>
                <List.Item>
                  社会活動
                  <List withPadding>
                    <List.Item>
                      <Text>
                        <span className="text-[#000AFF]">①</span>
                        自ら行動するもの
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text>
                        <span className="text-[#000AFF]">②</span>
                        目的を果たすために行動する
                      </Text>
                    </List.Item>
                  </List>
                </List.Item>
                <List.Item>
                  食
                  <List withPadding>
                    <List.Item>
                      <Text>
                        <span className="text-[#000AFF]">①</span>
                        人によって好みが違う
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text>
                        <span className="text-[#000AFF]">②</span>
                        目的を果たすために行動する
                      </Text>
                    </List.Item>
                  </List>
                </List.Item>
                <List.Item>
                  住
                  <List withPadding>
                    <List.Item>① 雨風を防げる</List.Item>
                    <List.Item>②プライバシーが保護されている</List.Item>
                  </List>
                </List.Item>
                <List.Item>
                  衣類
                  <List withPadding>
                    <List.Item>
                      <Text>
                        <span className="text-[#F24E1E]">①</span>
                        服を着て外出する
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text>
                        <span className="text-[#F24E1E]">②</span>
                        重ね着や腕捲りなどで体温調節ができる
                      </Text>
                    </List.Item>
                  </List>
                </List.Item>
                <List.Item>
                  公共福祉
                  <List withPadding>
                    <List.Item>
                      <Text>
                        <span className="text-[#25872F]">①</span>
                        社会福祉は社会的弱者に対するものである
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text>
                        <span className="text-[#25872F]">②</span>
                        生活保護を受けることができ、
                        最低限の生活が保障されている
                      </Text>
                    </List.Item>
                  </List>
                </List.Item>
              </List>
            </Box>
          </Flex>
        </>
      </BoxWithTitle>

      <Space h={40} />
      <BoxWithTitle title="カテゴリ別の結論" isNoBox>
        <SimpleGrid
          sx={{
            gap: 12,
          }}
          cols={3}
          breakpoints={[
            { maxWidth: 'md', cols: 3, spacing: 'xl' },
            { maxWidth: 'sm', cols: 2, spacing: 'lg' },
            { maxWidth: 'xs', cols: 1, spacing: 'md' },
          ]}
        >
          {categoryList.map((item, i) => {
            return (
              <CategoryCard
                key={i}
                title={item.title}
                description={item.description}
                membersImage={item.membersImage}
                href={`/category/${item.href}`}
              />
            );
          })}
        </SimpleGrid>
      </BoxWithTitle>
      <Space h={40} />
      <BoxWithTitle title="考察">
        <div>
          <Text weight="bold">本研究の限界・今後の展望</Text>
          <List listStyleType="number" className="w-11/12">
            <List.Item>
              今回はあたりまえを6分野に分類したが、各分野の抽象度にばらつきがある。
              <List listStyleType="revert-layer">
                <List.Item>
                  例えば、「信仰」分野は、厳密にいえば「文化・習慣」分野の部分集合とみなせるので、比較的抽象度が低いと言える。
                </List.Item>
                <List.Item>
                  改善案としては、諸科学分野による分類が挙げられよう。例えば、「本能」分野は「生物学的要因」に置き換えた方がより広範囲をカバーできるかもしれない。同様に「文化・習慣」分野も「社会学的要因」とした方が望ましいかもしれない。このようにすれば、今回に比して、各分野の抽象度は均等になる。
                </List.Item>
              </List>
            </List.Item>
            <List.Item>
              本研究は、類型化を通して「あたりまえ」の定義を行った。しかし、あたりまえを疑い、新たなシーズを発見する具体的な手法は分析されなかった。今回明らかになった「考える必要・疑う必要のないこと」をもとに、実際にシーズを発見し、どのようにして新たな創作を行うかを考察すべきであろう。
            </List.Item>
            <List.Item>
              例
              <List listStyleType="revert-layer">
                <List.Item>
                  小型化 e.g.スマホはPCを小型化することで、新規性を獲得した。
                </List.Item>
                <List.Item>
                  電子化
                  e.g.電子メールは手紙を電子化することで、新規性を獲得した。
                </List.Item>
                <List.Item>
                  マッチングシステムの導入 e.g.Uber
                  Eatsは、配達作業にマッチングシステムを導入することで、流通に革新をもたらした。
                </List.Item>
                <List.Item>
                  サブスクリプションの導入 e.g.Apple
                  Musicは、音楽を「所有」から「利用」する形態を考案し、音楽の販売・サービス業界に革新をもたらした。
                </List.Item>
              </List>
            </List.Item>
            <List.Item>
              こうした小型化や電子化などのアイデアは、新規性を持った商品・サービスを企画するための実践的な発想法である。
            </List.Item>
            <List.Item>
              これらをケーススタディによって抽出し体系化することが、今後の課題である。
            </List.Item>
          </List>
        </div>
      </BoxWithTitle>
      <Space h={40} />

      <BoxWithTitle title="授業風景">
        <Carousel
          slideSize="70%"
          align="start"
          slideGap="sm"
          controlsOffset="md"
          controlSize={28}
          withIndicators
        >
          <Carousel.Slide>
            <Image src="/images/carousel/1.jpg" alt="授業風景1" />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src="/images/carousel/2.jpg" alt="授業風景2" />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src="/images/carousel/3.jpg" alt="授業風景3" />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src="/images/carousel/4.jpg" alt="授業風景4" />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src="/images/carousel/5.jpg" alt="授業風景5" />
          </Carousel.Slide>
        </Carousel>
      </BoxWithTitle>
      <Space h={40} />
    </>
  );
};

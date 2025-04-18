import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { motion } from "framer-motion";
import ProductCardsOfPaper from "./ProductCardsOfPaper";
import ProductCardsOfFoam from "./ProductCardsOfFoam";
import ProductCardsOfStretch from "./ProductCardsOfStretch";
import ProductCardsOfString from "./ProductCardsOfString";
import ProductCardsOfBubbles from "./ProductCardsOfBubbles";
import ProductCardsOfTaps from "./ProductCardsOfTaps";
import ProductCardsOfCarton from "./ProductCardsOfCarton";

export default function ProductsSec() {
  return (
    <div className="dark:bg-[#141516] dark:text-white">
      <div className="flex sm:w-[80%] flex-col w-full justify-center pt-10 px-4 container m-auto ">
        <h1 className="text-center border-b-3 pb-2 w-fit mb-5 text-3xl font-bold m-auto">
          المنتجات
        </h1>
        <div className="w-full">
          <TabGroup >
            <TabList className="flex flex-wrap  justify-center mb-12 ">
              {["الكل", "ورق", "كرتون","سلوتيب", "استرتش", "فوم", "بابلز", "خيط"].map(
                (tab, index) => (
                  <Tab
                    key={index}
                    className=" dark:text-white dark:data-[selected]:bg-transparent dark:data-[hover]:bg-transparent dark:border-white   data-[selected]:border-b-3 border-black py-1 mx-1 sm:mx-3 flex flex-wrap text-xl sm:text-2xl font-semibold text-black focus:outline-none 
                    
                data-[focus]:outline-1 data-[focus]:outline-black hover:cursor-pointer  "
                  >
                    {tab}
                  </Tab>
                )
              )}
            </TabList>
            <TabPanels className="mt-3 min-h-screen">
              {/* تبويب الكل */}
              <TabPanel>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className=" flex flex-col gap-4"
                >
                  <ProductCardsOfPaper />
                  <ProductCardsOfCarton/>
                  <ProductCardsOfFoam />
                  <ProductCardsOfStretch />
                  <ProductCardsOfString />
                  <ProductCardsOfBubbles />
                </motion.div>
              </TabPanel>

              <TabPanel>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl"
                >
                  <ProductCardsOfPaper />
                </motion.div>
              </TabPanel>

             
              <TabPanel>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl"
                >
                  <ProductCardsOfCarton/>
                </motion.div>
              </TabPanel>
              <TabPanel>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl"
                >
                  <ProductCardsOfTaps/>
                </motion.div>
              </TabPanel>

              <TabPanel>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl"
                >
                  <ProductCardsOfStretch />
                </motion.div>
              </TabPanel>

              <TabPanel>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl"
                >
                  <ProductCardsOfFoam />
                </motion.div>
              </TabPanel>

              <TabPanel>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl"
                >
                  <ProductCardsOfBubbles />
                </motion.div>
              </TabPanel>

              <TabPanel>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl"
                >
                  <ProductCardsOfString />
                </motion.div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  );
}
